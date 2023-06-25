import React, {useContext} from "react";
import Answer from "./Answer";
import {QuizContext} from "../../../contexts/quiz";

const QuestionVideo = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const gestures = quizState?.answers;
  const currentQuestion = quizState?.questions[quizState.currentQuestionIndex];
  const videoUri = quizState.correctAnswer.uri;

  return (
    <>
      <div className="question">
        <span>{currentQuestion.text}</span>
      </div>
      <div className="answers_video">
        <div className="video_container">
            <video key={videoUri} loop autoPlay height="300" muted>
              <source src={require(`../../../assets/${videoUri}`)}  type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
        </div>
        {gestures.map((gesture, index) => (
          <Answer
            gesture={gesture}
            QuestionAnswerType={currentQuestion?.questionType}
            index={index}
            key={index}
            onSelectAnswer={() => dispatch({type: "SELECT_ANSWER", payload: gesture})}
          />
        ))}
      </div>
    </>
  );
};
export default QuestionVideo;
