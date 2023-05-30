export const shuffleAnswers = (question) => {
  if (!question) {
    return [];
  }

  const { correctGesture, wrongGesture1, wrongGesture2, wrongGesture3 } = question;
  const unShuffledAnswers = [correctGesture, wrongGesture1, wrongGesture2, wrongGesture3];

  const shuffledAnswers = [...unShuffledAnswers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  return shuffledAnswers;
};

