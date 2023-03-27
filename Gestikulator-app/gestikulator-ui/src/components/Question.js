import {useContext} from "react";
import {QuizContext} from "../contexts/quiz";
import QuestionVideo from "./QuestionVideo";
import QuestionText from "./QuestionText";
import QuestionCamera from "./QuestionCamera";
import * as Constants from "../constants.js"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (currentQuestion.QuestionAnswerType === Constants.QuestionVideoAnswerText)
    return QuestionVideo(currentQuestion, quizState, dispatch)

  if (currentQuestion.QuestionAnswerType === Constants.QuestionTextAnswerCamera)
    return QuestionCamera(currentQuestion, quizState, dispatch)

  return QuestionText(currentQuestion, quizState, dispatch)
};

export default Question;
