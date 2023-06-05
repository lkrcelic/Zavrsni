import React, {useEffect, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import * as cam from '@mediapipe/camera_utils';
import {Holistic} from '@mediapipe/holistic';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const sendFramesToAPI = async (gestureName, results) => {
  try {
    const gestureNameSmall = gestureName.toLowerCase();
    const response = await axios.post('http://localhost:5000/predict', {
      frames: results,
      gesture: gestureNameSmall
    }, {
      headers: {'Content-Type': 'application/json'}
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

const AnswerCamera = ({index, onSelectAnswer, answerText}) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [, setRecordedChunks] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [keyPointsList, setKeyPointsList] = useState([]);
  const [holistic, setHolistic] = useState(null);


  function onResults(results) {
    console.log("on results")
    if (isCapturing) {
      const defaultKeyPoints = (length, dimensions) => Array.from(Array(length), () => new Array(dimensions));
      const combinedList = [
        results.poseLandmarks || defaultKeyPoints(33, 4),
        results.faceLandmarks || defaultKeyPoints(468, 3),
        results.leftHandLandmarks || defaultKeyPoints(21, 3),
        results.rightHandLandmarks || defaultKeyPoints(21, 3),
      ];
      setKeyPointsList(prevList => [...prevList, combinedList]);
    }
  }

  // Initialize Holistic instance
  useEffect(() => {
    console.log("Initialize Holistic instance")
    const instance = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      },
    });

    instance.setOptions({
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });
    instance.onResults(onResults);

    setHolistic(instance);
  }, []);


// Start the camera
  useEffect(() => {
    console.log("Start the camera")

    if (!holistic || !webcamRef.current) return;
    const camera = new cam.Camera(webcamRef.current.video, {
      onFrame: async () => {
        await holistic.send({image: webcamRef.current.video});
      },
      width: 640,
      height: 480,
    });
    camera.start();
  }, [holistic]);


  // MediaRecorder
  const handleDataAvailable = ({data}) => {
    if (data.size > 0) {
      setRecordedChunks(prevRecordedChunks => [...prevRecordedChunks, data]);
    }
  };
  const handleStartCaptureClick = () => {
    setIsCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorderRef.current.start();
  };
  const handleStopCaptureClick = async () => {
    setIsCapturing(false);
    mediaRecorderRef.current.stop();

    const predictedGesture = await sendFramesToAPI(answerText, keyPointsList);
    setIsAnswered(true);
    if (predictedGesture === answerText) {
      //TODO onSelectAnswer treba dodati negjde
    }
  };

  const handleSkipClick = () => {
    // For now, just log a message to the console.
    console.log('Skip button clicked!');
    // Implement your desired functionality here.
  };

  return (
    <div className="preform_gesture">
      <Box sx={{
        ml: 'auto',
        mr: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 9,
        width: 640,
        height: 480,
        transform: 'scaleX(-1)'
      }}>
        <Webcam ref={webcamRef}/>
      </Box>
      <Box
        sx={{display: 'flex', justifyContent: 'center', p: 2, gap: 2}}>
        {isCapturing ? (
          <Button variant="contained" color="primary" onClick={handleStopCaptureClick}>
            <Typography variant="h6">
              Zaustavi snimanje
            </Typography>
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleStartCaptureClick}>
            <Typography variant="h6">
              Pokreni snimanje
            </Typography>
          </Button>
        )}
        <Button variant="contained" color="secondary" onClick={handleSkipClick}>
          <Typography variant="h6">
            Ne mogu sada
          </Typography>
        </Button>
      </Box>
    </div>
  )
    ;
}

export default AnswerCamera;
