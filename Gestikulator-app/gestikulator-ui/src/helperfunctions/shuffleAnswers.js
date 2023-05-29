export const shuffleAnswers = (question) => {
  console.log(question)
  if (!question) {
    return [];
  }
  const unShuffledAnswers = [
    question.correctGesture,
    question.wrongGesture1,
    question.wrongGesture2,
    question.wrongGesture3,
  ];
  return unShuffledAnswers
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
