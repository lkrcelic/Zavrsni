import React from "react";

const AnswerText = (
  correctAnswerClass,
  wrongAnswerClass,
  disabledClass,
  letterMapping,
  answerText,
  index,
  onSelectAnswer
) => {
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-text-letter">{letterMapping[index]}</div>
      <div className="answer-text">
        <span>{answerText}</span>
      </div>
    </div>
  );
};
export default AnswerText;