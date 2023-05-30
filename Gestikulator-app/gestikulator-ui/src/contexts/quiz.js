import React, {createContext, useReducer} from "react";
import {shuffleAnswers} from "../helperfunctions/shuffleAnswers";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  correctAnswersCount: 0,
  isQuestionAnswered: false,
  answeredQuestion: null,
  showResults: false
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      const answers = shuffleAnswers(action.payload[state.currentQuestionIndex]);
      const correctAnswer = action.payload[state.currentQuestionIndex].correctGesture;

      return {
        ...state,
        questions: action.payload,
        answers,
        correctAnswer,
        currentQuestionIndex: 0,
        correctAnswersCount: 0,
        isQuestionAnswered: false,
        showResults: false
      };
    case "SELECT_ANSWER": {
      if (action.payload === state.correctAnswer) {
        return {
          ...state,
          isQuestionAnswered: true,
          answeredQuestion: action.payload,
          correctAnswersCount: state.correctAnswersCount + 1
        };
      }

      return {...state, isQuestionAnswered: true, answeredQuestion: action.payload};
    }
    case "NEXT_QUESTION": {
      const nextQuestionIndex = state.currentQuestionIndex + 1;
      const showResults = nextQuestionIndex === state.questions.length;
      const currentQuestionIndex = showResults ? state.currentQuestionIndex : nextQuestionIndex;
      const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
      const correctAnswer = showResults ? null : state.questions[currentQuestionIndex].correctGesture;

      return {
        ...state,
        currentQuestionIndex,
        answers,
        correctAnswer,
        showResults,
        isQuestionAnswered: false,
        answeredQuestion: null
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
