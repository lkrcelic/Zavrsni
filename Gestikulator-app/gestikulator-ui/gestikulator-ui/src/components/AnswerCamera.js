import React from 'react';
import { Holistic } from "@mediapipe/holistic"
import * as holistic_utils from "@mediapipe/holistic"
import * as cam from "@mediapipe/camera_utils"
import Webcam from "react-webcam"
import { useRef, useEffect } from "react"
import axios from 'axios'
import CountdownApp from "./Countdown/Countdown"


async function sendFramesToAPI(gestureName, results) {
  console.log(gestureName)
  return axios.post(
    'http://localhost:5000/predict',
    {
      frames: results,
      gesture: gestureName
    },
    {
      headers:
        { 'Content-Type': 'application/json' }
    }
  ).then(res => res.data)
    .catch(err => console.error(err))
}

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const INITIAL_COUNT = 3


const AnswerCamera = (correctAnswerClass,
  wrongAnswerClass,
  disabledClass,
  letterMapping,
  answerText,
  index,
  onSelectAnswer,
  gestureName,
) => {
  let response = null;

  let ocajanSam = false;
  let ocajanSam2 = true;

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = React.useRef(null);

  const [list, setList] = React.useState([]);
  const [capturing, setCapturing] = React.useState(false);
  const [takingFrames, setTakingFrames] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const [isAnswered, setIsAnswered] = React.useState();

  var camera = null;

  function onResults(results) {
    // if the setCaptuing is set, then push keypoints to the list which will be sent to the API
    // nisam ponosan na ovaj dio koda, ali legit mi sa stateovima nije radilo...
    if (ocajanSam && ocajanSam2) {
      //console.log(ocajanSam2)
      const combinedList = []
      results.poseLandmarks ? combinedList.push(results.poseLandmarks) : combinedList.push(Array.from(Array(33), () => new Array(4)))
      results.faceLandmarks ? combinedList.push(results.faceLandmarks) : combinedList.push(Array.from(Array(468), () => new Array(3)))
      results.leftHandLandmarks ? combinedList.push(results.leftHandLandmarks) : combinedList.push(Array.from(Array(21), () => new Array(3)))
      results.rightHandLandmarks ? combinedList.push(results.rightHandLandmarks) : combinedList.push(Array.from(Array(21), () => new Array(3)))

      //console.log(combinedList)
      list.push(combinedList);
      setList(list)
    }

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    window.drawConnectors(canvasCtx, results.poseLandmarks, holistic_utils.POSE_CONNECTIONS,
      { color: '#00FF00', lineWidth: 4 });
    window.drawLandmarks(canvasCtx, results.poseLandmarks,
      { color: '#FF0000', lineWidth: 2 });
    window.drawConnectors(canvasCtx, results.faceLandmarks, holistic_utils.FACEMESH_TESSELATION,
      { color: '#C0C0C070', lineWidth: 1 });
    window.drawConnectors(canvasCtx, results.leftHandLandmarks, holistic_utils.HAND_CONNECTIONS,
      { color: '#CC0000', lineWidth: 5 });
    window.drawLandmarks(canvasCtx, results.leftHandLandmarks,
      { color: '#00FF00', lineWidth: 2 });
    window.drawConnectors(canvasCtx, results.rightHandLandmarks, holistic_utils.HAND_CONNECTIONS,
      { color: '#00CC00', lineWidth: 5 });
    window.drawLandmarks(canvasCtx, results.rightHandLandmarks,
      { color: '#FF0000', lineWidth: 2 });
    canvasCtx.restore();
  }


  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      },
    });

    holistic.setOptions({
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });

    holistic.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await holistic.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  const handleStartCaptureClick = () => {
    ocajanSam = true;

    // https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
    setTakingFrames(true); // THIS IS NOT WORKING?????
    setCapturing(true); // THIS IS NOT WORKING?????

    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = () => {
    ocajanSam = false;
    ocajanSam2 = false;
    setTakingFrames(false); // THIS IS NOT WORKING?????

    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  // todo napraviti
  const handleSkipClick = () => {
    setCapturing(false)
    onSelectAnswer("tocno")
  }

  const handleDetectGesture = () => {
    if (recordedChunks.length) {
      response = sendFramesToAPI(gestureName, list).then(res => {
        if (res === "tocno") {
          console.log("RADIIIIIIIIIIIIIIIIIII")
          onSelectAnswer("tocno")
          setIsAnswered(true)
        }
      });
    }
  }

  return (
    <div>
      <center>
        <div className="webcam">
          <Webcam
            ref={webcamRef}
            //mirrored="false"
            style={{
              position: 'fixed',
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />{" "}
          <canvas
            ref={canvasRef}
            className="output_canvas"
            style={{
              position: "fixed",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
              border: `${isAnswered === true ? "15px solid green" : ""} `,
            }}
          ></canvas>

        </div>
      </center>

      <div style={{
        position: 'fixed', display: "flex",
        alignItems: "center",
      }}>
        {capturing ? (
          <button className="record-button" onClick={handleStopCaptureClick}>Zaustavi snimanje</button>
        ) : (
          <button className="record-button" onClick={handleStartCaptureClick}>Pokreni snimanje</button>
        )}
        {recordedChunks.length > 0 && (
          <button className="record-button" onClick={handleDetectGesture}>Podnesi</button>
        )}
      </div>

      <div >
        <button className="skip-button" onClick={handleSkipClick}>Ne mogu sada</button>
      </div>

      {/* <div className="countdown">
      <CountdownApp></CountdownApp>

      </div> */}
    </div>
  );
}

export default AnswerCamera;