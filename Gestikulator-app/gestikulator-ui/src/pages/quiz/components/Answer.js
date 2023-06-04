import * as Constants from "../../../constants/QuestionTypes.js";
import AnswerVideo from "./AnswerVideo";
import AnswerText from "./AnswerText";
import AnswerCamera from "./AnswerCamera.js";
import {QuizContext} from "../../../contexts/quiz";
import {useContext} from "react";

const Answer = ({gesture, QuestionAnswerType, index, onSelectAnswer}) => {
  const [quizState] = useContext(QuizContext);
  const answerProps = {
    answerText: gesture?.name,
    answerUri: gesture?.uri,
    isCorrect: quizState.correctAnswer === gesture,
    isThisAnswerSelected: quizState.answeredQuestion === gesture,
    isQuestionAnswered: quizState.isQuestionAnswered,
    letterMapping: ["A", "B", "C", "D"],
    index,
    onSelectAnswer,
  };
  console.log(gesture, QuestionAnswerType, index, onSelectAnswer)
  switch (QuestionAnswerType) {
    case Constants.GUESS_PHRASE:
      return <AnswerVideo {...answerProps} />;
    case Constants.GENERAL_KNOWLEDGE:
    case Constants.GUESS_GESTURE:
      return <AnswerText {...answerProps} />;
    case Constants.PERFORM_GESTURE:
      return <AnswerCamera {...answerProps} />;
    default:
      return null;
  }
};

export default Answer;
