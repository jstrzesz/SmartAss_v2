import React from 'react';

interface Props {
  question: string,
  correct_answer: string,
  incorrect_answers: string[],
  index: number
}

const QuestionCard = ({ question, correct_answer, incorrect_answers, index }: Props) => {
  const shuffle = (answers: any) => {
    for(let i = answers.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = answers[i]
      answers[i] = answers[j]
      answers[j] = temp
    }
    return answers;
  }
  const answers = shuffle([correct_answer].concat(incorrect_answers));

  return (
    <div>
      <li>
        <h1>{index + 1}. {question}</h1>
        <h3>A. {answers[0]}</h3>
        <h3>B. {answers[1]}</h3>
        <h3>C. {answers[2]}</h3>
        <h3>D. {answers[3]}</h3>
      </li>
    </div>
  );
};

export default QuestionCard;
