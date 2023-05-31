import {useContext} from "react";
import {QuizContext} from "../../../contexts/quiz";
import QuestionVideo from "./QuestionVideo";
import QuestionText from "./QuestionText";
import QuestionCamera from "./QuestionCamera";
import * as Constants from "../../../constants/QuestionTypes.js"

const Question = () => {
  const [quizState] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  switch (currentQuestion?.questionType) {
    case Constants.GUESS_GESTURE:
      return <QuestionVideo/>
    case Constants.PERFORM_GESTURE:
      return <QuestionCamera/>
    case Constants.GUESS_PHRASE:
    case Constants.GENERAL_KNOWLEDGE:
      return <QuestionText/>;
    default:
      return <></>;
  }
};

export default Question;
