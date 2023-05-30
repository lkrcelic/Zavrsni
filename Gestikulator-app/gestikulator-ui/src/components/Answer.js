import * as Constants from "../constants/QuestionTypes.js";
import AnswerVideo from "./AnswerVideo";
import AnswerText from "./AnswerText";
import AnswerCamera from "./AnswerCamera.js";
import {QuizContext} from "../contexts/quiz";
import {useContext} from "react";

const Answer = ({gesture, QuestionAnswerType, index, onSelectAnswer}) => {
  const [quizState] = useContext(QuizContext);
  const letterMapping = ["A", "B", "C", "D"]; // todo dodati u const
  const answerText = gesture?.name;

  const isCorrect = quizState.correctAnswer === gesture;
  const isThisAnswerSelected = quizState.answeredQuestion === gesture;
  const isQuestionAnswered = quizState.isQuestionAnswered;

  const answerProps = {
    answerText,
    isCorrect,
    isThisAnswerSelected,
    isQuestionAnswered,
    letterMapping,
    index,
    onSelectAnswer,
  };

  switch (QuestionAnswerType) {
    case Constants.QuestionTextAnswerVideo:
      return <AnswerVideo {...answerProps} />;
    case Constants.QuestionVideoAnswerText: //TODO makuti nepotrebne caseove
    case Constants.QuestionTextAnswerText:
    case Constants.GUESS_GESTURE:
      return <AnswerText {...answerProps} />;
    case Constants.QuestionTextAnswerCamera:
      return <AnswerCamera {...answerProps} />;
    default:
      return null;
  }
};

export default Answer;
