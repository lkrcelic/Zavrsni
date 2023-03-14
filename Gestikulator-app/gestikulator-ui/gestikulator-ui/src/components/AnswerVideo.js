import React from "react";

const AnswerVideo = (
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
      <div className="answer-video-letter">{letterMapping[index]}</div>
      <div className="video" >
        <video width="auto" height="180px" loop autoPlay isMuted={true}>
          <source src={require("../assets/" + answerText)} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default AnswerVideo;