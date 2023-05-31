import * as Constants from "../../../constants/QuestionTypes.js";
import AnswerVideo from "./AnswerVideo";
import AnswerText from "./AnswerText";
import AnswerCamera from "./AnswerCamera.js";
import {QuizContext} from "../../../contexts/quiz";
import {useContext} from "react";

const Answer = ({gesture, QuestionAnswerType, index, onSelectAnswer}) => {
  const [quizState] = useContext(QuizContext);
  const letterMapping = ["A", "B", "C", "D"]; // todo dodati u const
  const answerText = gesture?.name;
  const answerUri = gesture?.uri;
  const isCorrect = quizState.correctAnswer === gesture;
  const isThisAnswerSelected = quizState.answeredQuestion === gesture;
  const isQuestionAnswered = quizState.isQuestionAnswered;

  const answerProps = {
    answerText,
    answerUri,
    isCorrect,
    isThisAnswerSelected,
    isQuestionAnswered,
    letterMapping,
    index,
    onSelectAnswer,
  };


  switch (QuestionAnswerType) {
    case Constants.GUESS_PHRASE:
      return <AnswerVideo {...answerProps} />;
    case Constants.GENERAL_KNOWLEDGE:
    case Constants.GUESS_GESTURE:
      return <AnswerText {...answerProps} />;
    case Constants.QuestionTextAnswerCamera:
      return <AnswerCamera {...answerProps} />;
    default:
      return null;
  }
};

export default Answer;
