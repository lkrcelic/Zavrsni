import React from "react";
import {Box, styled, Typography} from "@mui/material";
import {AnswerButton} from "./AnswerButton";

export const VideoAnswerBox = styled(Box)(({theme}) => ({
  width: 'auto',
  height: 180,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap:'10px'
}));

const AnswerVideo = ({
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
        <video width="100%" height="180px" loop autoPlay muted>
          <source src={require("../../../assets/" + "Gluh_1.MP4")} type="video/ogg"/>
          Your browser does not support the video tag.
        </video>
      </Box>
    </VideoAnswerBox>
  );
};

export default AnswerVideo;

