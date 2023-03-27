import * as Constants from "./constants";

const data = [
  {
    question: "Koja je naziv ove geste?",
    QuestionAnswerType: Constants.QuestionVideoAnswerText,
    video: "Gluh_1.MP4",
    incorrectAnswers: [
      "Ime",
      "Palenta",
      "Opseg",
    ],
    correctAnswer: "Gluh",
  },
  {
    question: "Koja je ispravna gesta za GLUH?",
    QuestionAnswerType: Constants.QuestionTextAnswerVideo,
    incorrectAnswers: [
      "Godina_1.MP4",
      "Ime_1.MP4",
      "Prezime_1.MP4",
    ],
    correctAnswer: "Gluh_1.MP4",
  },
  {
    question: "Jesu li hrvatski (HZJ) i američki (ASL) znakovni jezici jednaki?",
    QuestionAnswerType: Constants.QuestionTextAnswerText,
    incorrectAnswers: [
      "To nisu jezici",
      "Jednaki da jednakiji ne mogu biti",
      "Postoji jedan univerzalni jezik",
    ],
    correctAnswer: "Nisu, postoje razlike",
  },
  {
    question: "Koja je ispravna gesta za GLUH?",
    QuestionAnswerType: Constants.QuestionTextAnswerCamera,
    //todo staviti sve odgovore prazno?
    incorrectAnswers: [
      "krivo1",
      "krivo2",
      "krivo3",
    ],
    correctAnswer: "tocno",
    gestureName: "ime",
  },

];

export default data;
