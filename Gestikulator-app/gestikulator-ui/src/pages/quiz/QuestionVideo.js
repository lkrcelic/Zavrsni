import React from "react";
import Answer from "../../components/Answer";

const QuestionVideo = (currentQuestion, quizState, dispatch) => {

  const gestures = [
    currentQuestion.correctGesture, currentQuestion.wrongGesture1,
    currentQuestion.wrongGesture2, currentQuestion.wrongGesture3
  ]


  return (
    <>
      <div className="question">
        <span>{currentQuestion.text}</span>
      </div>
      <div className="answers_video">
        <div className="video_container">
          <div className="video">
            <video loop autoPlay height="400" isMuted={true}>
              <source
                src={require("../../assets/" + "Gluh_1.MP4")} //TODO currentQuestion.correctGesture.uri
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {gestures.map((gesture, index) => (
          <Answer
            answerText={gesture.name}
            key={index}
            index={index}
            onSelectAnswer={(gesture) =>
              dispatch({type: "SELECT_ANSWER", payload: gesture})
            }
          />
        ))}
      </div>
    </>
  );
};
export default QuestionVideo;
