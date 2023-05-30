// QuizContent.js
import React from "react";
import {ImBell, ImFire} from "react-icons/im";
import ReactTooltip from "react-tooltip";
import Question from "./Question";

export default function QuizContent({ currentQuestionIndex, questionsLength, questionAnswered, nextQuestion }) {
  return (
    <>
      <div className="question-info">
        <button className="question_icon_first" data-for="HintTip">
          <ImBell/>
        </button>
        <ReactTooltip id="HintTip" place="top" effect="solid">
          Pola-Pola!
        </ReactTooltip>
        <div className="score">
          <span>
            Question {currentQuestionIndex + 1}/{questionsLength}
          </span>
          <ReactTooltip id="streakTip" place="top" effect="solid">
            Točnih odgovora za redom!
          </ReactTooltip>
        </div>
        <button
          className="question_icon_second"
          data-tip
          data-for="streakTip"
        >
          <ImFire/>
        </button>
      </div>
      <div className="answers">
        <Question/>
      </div>
      {questionAnswered && (
        <div onClick={nextQuestion} className="next-button">
          Sljedeće pitanje
        </div>
      )}
    </>
  );
}
