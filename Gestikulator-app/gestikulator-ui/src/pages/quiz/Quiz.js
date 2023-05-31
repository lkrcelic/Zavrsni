import {useContext, useEffect, useState} from "react";
import {QuizContext} from "../../contexts/quiz";
import {AiFillCloseCircle} from "react-icons/ai";
import ExitLevel from "../../components/ExitLevel";
import {useNavigate} from "react-router-dom";
import {getQuestionsBySubLevelId} from "../../api/gestikulator/QuestionsAPI";
import Results from './components/Results.js';
import QuizContent from './components/QuizContent';

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


  if(quizState.loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="App">
        <AiFillCloseCircle onClick={toggle} size={40}/>
        <ExitLevel isShowing={isShowing} hide={toggle}/>
      </div>
      <div className="quiz">
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
      </div>
    </>
  );
};

export default Quiz;
