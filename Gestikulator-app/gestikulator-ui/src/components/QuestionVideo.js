import React from "react";
import Answer from "./Answer";

const QuestionVideo = (currentQuestion, quizState, dispatch) => {
  return (
    <>
      <div className="question">
        <span>{currentQuestion.question}</span>
      </div>
      <div className="answers_video">
        <div className="video_container">
          <div className="video">
            <video loop autoPlay height="400" isMuted={true}>
              <source
                src={require("../assets/" + currentQuestion.video)}
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            QuestionAnswerType={currentQuestion.QuestionAnswerType}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({type: "SELECT_ANSWER", payload: answerText})
            }
          />
        ))}
      </div>
    </>
  );
};
export default QuestionVideo;
