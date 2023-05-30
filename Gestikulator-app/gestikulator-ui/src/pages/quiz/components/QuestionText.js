import React, {useContext} from "react";
import Answer from "./Answer";
import {QuizContext} from "../../../contexts/quiz";

const QuestionText = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const gestures = quizState?.answers;
  const currentQuestion = quizState?.questions[quizState.currentQuestionIndex];

  return (
    <>
      <div className="question">
        <span>{currentQuestion.text}</span>
      </div>
      <div className="answers_text">
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
export default QuestionText;
