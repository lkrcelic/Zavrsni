// QuizContent.js
import React from "react";
import {ImBell, ImFire} from "react-icons/im";
import ReactTooltip from "react-tooltip";
import Question from "./Question";
import {Box, Button, Typography} from "@mui/material";

export default function QuizContent({ currentQuestionIndex, questionsLength, questionAnswered, nextQuestion }) {
  return (
    <div className="quiz">
      <div className="question-info">
        <button className="question_icon_first" data-for="HintTip">
          <ImBell />
        </button>
        <ReactTooltip id="HintTip" place="top" effect="solid">
          Pola-Pola!
        </ReactTooltip>
        <div className="score">
          <Typography variant="h5">
            Question {currentQuestionIndex + 1}/{questionsLength}
          </Typography>
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
          <Box className="next">
            <Button onClick={nextQuestion} variant="contained" color="info" sx={{ borderRadius: 50 }}>
              <Typography variant="body1">
                Sljedeće pitanje
              </Typography>
            </Button>
          </Box>
        )}
    </div>
  );
}
