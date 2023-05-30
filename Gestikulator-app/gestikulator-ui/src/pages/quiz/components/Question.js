import {useContext} from "react";
import {QuizContext} from "../../../contexts/quiz";
import QuestionVideo from "./QuestionVideo";
import QuestionText from "./QuestionText";
import QuestionCamera from "./QuestionCamera";
import * as Constants from "../../../constants/QuestionTypes.js"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  switch (currentQuestion?.questionType) {
    case Constants.GUESS_GESTURE:
      return QuestionVideo();
    case Constants.PERFORM_GESTURE:
      return QuestionCamera(currentQuestion, quizState, dispatch);
    case Constants.GUESS_PHRASE:
      return QuestionText();
    default:
      return <></>;
  }
};

export default Question;
