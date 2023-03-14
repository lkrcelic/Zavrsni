import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QuizProvider } from "./contexts/quiz";
import App from "./App";
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
