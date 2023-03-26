import React from 'react';
import Answer from "./Answer";

const QuestionCamera = (currentQuestion, quizState, dispatch) => {
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
          <Answer
            answerText={quizState.answers}
            QuestionAnswerType={currentQuestion.QuestionAnswerType}
            correctAnswerClass={currentQuestion.question}
            gestureName={currentQuestion.gestureName}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
      </div>
    </div>
  );
}
export default QuestionCamera;