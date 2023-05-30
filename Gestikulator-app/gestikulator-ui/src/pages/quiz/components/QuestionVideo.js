import React, {useContext} from "react";
import Answer from "./Answer";
import {QuizContext} from "../../../contexts/quiz";

const QuestionVideo = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const gestures = quizState?.answers;
  const currentQuestion = quizState?.questions[quizState.currentQuestionIndex];
  return (
    <>
      <div className="question">
        <span>{currentQuestion.text}</span>
      </div>
      <div className="answers_video">
        <div className="video_container">
          <div className="video">
            <video loop autoPlay height="400" isMuted={true}>
              //TODO currentQuestion.correctGesture.uri
              <source src={require("../../../assets/" + "Gluh_1.MP4")}  type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {gestures.map((gesture, index) => (
          <Answer
            gesture={gesture}
            QuestionAnswerType={currentQuestion?.questionType}
            index={index}
            onSelectAnswer={() => dispatch({type: "SELECT_ANSWER", payload: gesture})}
          />
        ))}
      </div>
    </>
  );
};
export default QuestionVideo;
