import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

const Home = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = () => {
    axios.post('/gameOptions', { amount: 10 })
      .then(res => {
        console.log(res.data)
        setQuestions(res.data)
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <button onClick={getQuestions}>Get Questions</button>
      {questions.map((question: any, i: number) => (
        <QuestionCard key={`${question.question}${i}`} question={question.question} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers} index={i} />
      ))}
    </>
  )
}

export default Home;
