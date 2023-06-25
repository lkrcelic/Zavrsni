import {useContext, useEffect, useState} from "react";
import {QuizContext} from "../../contexts/quiz";
import {useNavigate} from "react-router-dom";
import {getQuestionsBySubLevelId} from "../../api/gestikulator/QuestionsAPI";
import Results from './components/Results.js';
import QuizContent from './components/QuizContent';
import {Box} from "@mui/material";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      const questions = await getQuestionsBySubLevelId(1); //TODO ne hardcoded ID
      dispatch({type: 'INITIALIZE', payload: questions});
    }

    fetchQuestions();
  }, []);

  function endQuiz() {
    dispatch({type: 'END_QUIZ'})
    navigate("/");
  }

  function nextQuestion() {
    dispatch({type: "NEXT_QUESTION"});
  }


  if (quizState.loading) {
    return <div>Loading...</div>
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height='calc(100vh - 60px)' >
      {quizState.showResults ? (
        <Results
          correctAnswersCount={quizState.correctAnswersCount}
          questionsLength={quizState.questions.length}
          endQuiz={endQuiz}
        />
      ) : (
        <QuizContent
          currentQuestionIndex={quizState.currentQuestionIndex}
          questionsLength={quizState.questions.length}
          questionAnswered={quizState.isQuestionAnswered}
          nextQuestion={nextQuestion}
        />
      )}
    </Box>
  );
};

export default Quiz;
