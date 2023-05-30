import React from "react";
import {Box, Typography} from "@mui/material";
import {AnswerButton} from "./AnswerButton";
import {VideoAnswerBox} from "./VideoAnswerBox";

const AnswerVideo = ({
                       answerUri,
                       isThisAnswerSelected,
                       isQuestionAnswered,
                       isCorrect,
                       letterMapping,
                       index,
                       onSelectAnswer
                     }) => {
  const buttonColor = isThisAnswerSelected ? (isCorrect ? 'green' : 'red') : 'transparent';

  return (
    <VideoAnswerBox>
      <AnswerButton
        variant="outlined"
        style={{backgroundColor: buttonColor}}
        onClick={onSelectAnswer}
        disabled={isQuestionAnswered}
      >
        <Typography variant="h3">
          {letterMapping[index]}
        </Typography>
      </AnswerButton>
      <Box>
        <video key={answerUri} width="100%" height="180px" loop autoPlay muted>
          <source src={require(`../../../assets/${answerUri}`)} type="video/ogg"/>
          Your browser does not support the video tag.
        </video>
      </Box>
    </VideoAnswerBox>
  );
};

export default AnswerVideo;

