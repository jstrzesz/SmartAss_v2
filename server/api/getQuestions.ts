import TriviaQuestion from "../../src/models/TriviaQuestion";

const axios = require('axios');

const convert = (string: string) => {
  return string.replace(/&amp:/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&uacute;/g, 'ú')
    .replace(/&epsilon;/g, 'Ɛ')
    .replace(/&Phi;/g, 'ϕ')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&Aring;/g,'Å')
    .replace(/&quot;/g, '"')
    .replace(/`/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&epsilon;/g, 'Ɛ')
    .replace(/&Phi;/g, 'ϕ')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&Aring;/g, 'Å')
    .replace(/&amp;/g, '&')
    .replace(/&hellip;/g, '_____')
};

const convertInput = (input: TriviaQuestion[], converted: TriviaQuestion[] = []): TriviaQuestion[] => {
  if (!input.length) {
    return converted;
  }
  let incorrect_answers: string[] = [];
  let question: string = '';
  let correct_answer: string = '';
  for (let key in input[0]) {
    if (key === 'question') {
      question = convert(input[0][key]);
    } else if (key === 'correct_answer') {
      correct_answer = convert(input[0].correct_answer);
    } else if (key === 'incorrect_answers') {
      incorrect_answers = input[0][key].map((answer: string) => {
        return convert(answer);
      });
    }
  }
  converted.push({
    question,
    incorrect_answers,
    correct_answer,
    type: input[0].type,
    difficulty: input[0].difficulty,
    category: input[0].category,
  })
  return convertInput(input.slice(1), converted);
};

const getQuestions = async (amount: number) => {
  const response = await axios.post(`https://opentdb.com/api.php?amount=${amount}`);
  const body = await response.data.results;
  const converted = await convertInput(body);
  return converted;
}

module.exports = getQuestions;