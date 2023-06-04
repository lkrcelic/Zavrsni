import React, {useContext} from 'react';
import Answer from "./Answer";
import {QuizContext} from "../../../contexts/quiz";

const QuestionCamera = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState?.questions[quizState.currentQuestionIndex];
  const correctGesture = currentQuestion.correctGesture;

  return (
    <div>
      <div className="question">{currentQuestion.text}</div>
      <div className="answers">
        <Answer
          gesture={correctGesture}
          QuestionAnswerType={currentQuestion.questionType}
          onSelectAnswer={(answerText) =>
            dispatch({type: "SELECT_ANSWER", payload: answerText})
          }
        />
      </div>
    </div>
  );
}
export default QuestionCamera;
