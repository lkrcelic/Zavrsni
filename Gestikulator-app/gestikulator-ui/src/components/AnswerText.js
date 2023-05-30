import React from "react";

const AnswerText = ({answerText, answerClass, letterMapping, index, onSelectAnswer}) => {

  return (
    <div className={`answer ${answerClass}`} onClick={() => onSelectAnswer()}>
      <div className="answer-text-letter">{letterMapping[index]}</div>
      <div className="answer-text">
        <span>{answerText}</span>
      </div>
    </div>
  );
};
export default AnswerText;
