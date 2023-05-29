import {useContext} from "react";
import {QuizContext} from "../../contexts/quiz";
import QuestionVideo from "./QuestionVideo";
import QuestionText from "./QuestionText";
import QuestionCamera from "./QuestionCamera";
import * as Constants from "../../constants/QuestionTypes.js"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (currentQuestion?.questionType === Constants.GUESS_GESTURE)
    return QuestionVideo(currentQuestion, quizState, dispatch)

  if (currentQuestion?.questionType === Constants.PERFORM_GESTURE)
    return QuestionCamera(currentQuestion, quizState, dispatch)

  return <div></div>
 // return QuestionText(currentQuestion, quizState, dispatch)
};

export default Question;
