import {Typography} from '@mui/material';
import {TextAnswerBox, AnswerButton} from "./index";

const AnswerText = ({
                      answerText,
                      isThisAnswerSelected,
                      isQuestionAnswered,
                      isCorrect,
                      letterMapping,
                      index,
                      onSelectAnswer
                    }) => {
  const buttonColor = isThisAnswerSelected ? (isCorrect ? 'green' : 'red') : 'transparent';

  return (
    <TextAnswerBox>
      <AnswerButton
        variant="outlined"
        onClick={onSelectAnswer}
        disabled={isQuestionAnswered}
        style={{backgroundColor: buttonColor}}
      >
        <Typography variant="h3">
          {letterMapping[index]}
        </Typography>
      </AnswerButton>
      <Typography variant="h4">
        {answerText}
      </Typography>
    </TextAnswerBox>
  );
};

export default AnswerText;
