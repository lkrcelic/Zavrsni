import * as Constants from "../constants/QuestionTypes.js";
import AnswerVideo from "./AnswerVideo";
import AnswerText from "./AnswerText";
import AnswerCamera from "./AnswerCamera.js";

const Answer = ({
                  answerText,
                  QuestionAnswerType,
                  index,
                  onSelectAnswer,
                  currentAnswer,
                  correctAnswer,
                  gestureName,
                }) => {
  const letterMapping = ["A", "B", "C", "D"]; // todo dodati u const
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  if (QuestionAnswerType === Constants.QuestionTextAnswerVideo)
    // todo pametnije rjesiti
    return AnswerVideo(
      correctAnswerClass,
      wrongAnswerClass,
      disabledClass,
      letterMapping,
      answerText,
      index,
      onSelectAnswer
    );

  if (
    QuestionAnswerType === Constants.QuestionVideoAnswerText ||
    QuestionAnswerType === Constants.QuestionTextAnswerText
  ) {
    return AnswerText(
      correctAnswerClass,
      wrongAnswerClass,
      disabledClass,
      letterMapping,
      answerText,
      index,
      onSelectAnswer
    );
  }
  if (QuestionAnswerType === Constants.QuestionTextAnswerCamera) {
    return AnswerCamera(
      correctAnswerClass,
      wrongAnswerClass,
      disabledClass,
      letterMapping,
      answerText,
      index,
      onSelectAnswer,
      gestureName
    );
  }
};

export default Answer;
