import {Typography} from '@mui/material';
import {AnswerBox, AnswerButton} from "../pages/quiz/components";

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
    <AnswerBox>
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
    </AnswerBox>
  );
};

export default AnswerText;
