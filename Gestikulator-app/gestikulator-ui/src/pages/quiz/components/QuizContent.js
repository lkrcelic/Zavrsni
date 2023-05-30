// QuizContent.js
import React from "react";
import {ImBell, ImFire} from "react-icons/im";
import ReactTooltip from "react-tooltip";
import Question from "./Question";
import {Box, Button, Typography} from "@mui/material";

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
        {questionAnswered && (
          <Box sx={{ marginTop: 2, marginRight: 1,}}>
            <Button onClick={nextQuestion} variant="contained" color="info" sx={{ borderRadius: 50 }}>
              <Typography variant="h6">
                Sljedeće pitanje
              </Typography>
            </Button>
          </Box>
        )}
      </div>
    </>
  );
}
