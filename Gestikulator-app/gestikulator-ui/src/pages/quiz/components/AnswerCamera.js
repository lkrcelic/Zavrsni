import React, {useContext, useEffect, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import * as cam from '@mediapipe/camera_utils';
import {Holistic} from '@mediapipe/holistic';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {QuizContext} from "../../../contexts/quiz";
import {getResult} from "../../../api/python/predictAPI";

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

const AnswerCamera = ({answerText}) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [, setRecordedChunks] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [keyPointsList, setKeyPointsList] = useState([]);
  const [holistic, setHolistic] = useState(null);

  const [, dispatch] = useContext(QuizContext);

  function onResults(results) {
    if (isCapturing) {
      //console.log("on results")
      //console.log(results); // Print the entire results object
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

  // Initialize Holistic instance adn start camera
  useEffect(() => {
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

    if (!webcamRef.current) return;
    const camera = new cam.Camera(webcamRef.current.video, {
      onFrame: async () => {
        await instance.send({image: webcamRef.current.video});
      },
      width: 640,
      height: 480,
    });
    camera.start();

    setHolistic(instance);
  }, []);

  //set onResult function
  useEffect(() => {
    if (holistic) {
      holistic.onResults(onResults);
    }
  }, [isCapturing])


  // MediaRecorder
  const handleDataAvailable = ({data}) => {
    if (data.size > 0) {
      setRecordedChunks(prevRecordedChunks => [...prevRecordedChunks, data]);
    }
  };

  const handleStartCaptureClick = () => {
    setIsCapturing(true);
    console.log('Started capturing');  // <-- Add this line

    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorderRef.current.start();
  };
  const handleStopCaptureClick = async () => {
    setIsCapturing(false);
    mediaRecorderRef.current.stop();

    const predictedGesture = await getResult(answerText, keyPointsList);
    console.log(keyPointsList)
    setIsAnswered(true);
    if (predictedGesture === answerText) {
      //TODO onSelectAnswer treba dodati negjde
      console.log("tocno")
    } else {
      console.log("netocno")
    }
  };

  const handleSkipClick = () => {
    dispatch({type: "NEXT_QUESTION"});
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
