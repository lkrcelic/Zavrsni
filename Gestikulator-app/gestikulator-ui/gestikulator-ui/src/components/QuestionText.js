import React from "react";
import Answer from "./Answer";

const QuestionText = (currentQuestion, quizState, dispatch) => {
  return (
    <>
      <div className="question">
        <span>{currentQuestion.question}</span>
      </div>
      <div className="answers_text">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            QuestionAnswerType={currentQuestion.QuestionAnswerType}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </>
  );
};
export default QuestionText;