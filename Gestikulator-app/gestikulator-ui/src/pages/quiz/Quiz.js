import {useContext, useEffect, useState} from "react";
import Question from "./Question";
import {QuizContext} from "../../contexts/quiz";
import ReactTooltip from "react-tooltip";
import {ImBell, ImFire} from "react-icons/im";
import {AiFillCloseCircle} from "react-icons/ai";
import ExitLevel from "../../components/ExitLevel";
import {useNavigate} from "react-router-dom";
import {getQuestionsBySubLevelId} from "../../api/gestikulator/QuestionsAPI";

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
      dispatch({ type: 'UPDATE_QUESTIONS', payload: questions });
    }

    fetchQuestions();
  }, []);



  function endQuiz() {
    console.log("tu sam");
    // poslati api call na backend da je user zavrsio
    // azurirati podatke
    // vratiti na main page
    navigate("/");
  }

  return (
    <>
      <div className="App">
        <AiFillCloseCircle onClick={toggle} size={40}/>
        <ExitLevel isShowing={isShowing} hide={toggle}/>
      </div>
      <div className="quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">Čestitke!</div>
            <div className="results-info">
              <div className="message_text">
                <span>Završili ste kviz.</span>
              </div>
              <div className="message_text">
                <span>
                  Odgovoreno {quizState.correctAnswersCount} od &nbsp;
                  {quizState.questions.length} ispravno.
                </span>
              </div>
            </div>
            <div onClick={endQuiz} className="next-button">
              Kraj
            </div>
          </div>
        )}
        {!quizState.showResults && (
          <>
            <div className="question-info">
              <button className="question_icon_first" data-for="HintTip">
                <ImBell/>
              </button>
              <ReactTooltip id="HintTip" place="top" effect="solid">
                Pola-Pola!
              </ReactTooltip>
              <div className="score">
                <span>
                  Question {quizState.currentQuestionIndex + 1}/
                  {quizState.questions.length}
                </span>
                <ReactTooltip id="streakTip" place="top" effect="solid">
                  Točnih odgovora za redom!
                </ReactTooltip>
              </div>
              <button
                className="question_icon_second"
                data-tip
                data-for="streakTip"
              >
                <ImFire/>
              </button>
            </div>
            <div className="answers">
              <Question/>
            </div>
            {quizState.currentAnswer && (
              <div
                onClick={() => dispatch({type: "NEXT_QUESTION"})}
                className="next-button"
              >
                Sljedeće pitanje
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
