interface TriviaQuestion {
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
  category: string,
  difficulty: string,
  type: string,
};

export default TriviaQuestion;
