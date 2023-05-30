import React from "react";
import {Button} from "@mui/material";

export default function Results({ correctAnswersCount, questionsLength, endQuiz }) {
  return (
    <div className="results">
      <div className="congratulations">Čestitke!</div>
      <div className="results-info">
        <div className="message_text">
          <span>Završili ste kviz.</span>
        </div>
        <div className="message_text">
          <span>{`Odgovoreno ${correctAnswersCount} od ${questionsLength} ispravno.`}</span>
        </div>
      </div>
      <Button onClick={endQuiz} variant="contained" size="large" color="error">
        Kraj
      </Button>
    </div>
  );
}
