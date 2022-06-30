import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import questions from './questions';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

function App() {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionEnd, setQuestionEnd] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const answerEventHandler = (isCorrect) => {
    if (isCorrect === true) {
      const rightAnswer = correctAnswer + 1;
      setCorrectAnswer(rightAnswer);
    }
    const nextQuestion = questionNumber + 1;
    if (nextQuestion < questions.length) {
      setQuestionNumber(nextQuestion);
    }
    else {
      setQuestionEnd(true);
    }
  }


  return (
    <div className='container'>
      {questionEnd ? (<div className='end-page'>You have scored {correctAnswer} out of {questions.length}</ div>) : (
        <>
          <div className='question-area'>
            <span className='question-number'>Question {questionNumber + 1}/ {questions.length}</span>
            <div className='question-text'>{questions[questionNumber].questionText}</div>
          </div>
          <div className='answer-area'>
            {questions[questionNumber].answerOptions.map((answers) => <button onClick={() => answerEventHandler(answers.isCorrect)}>{answers.answerText}</button>)}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
