import React, { useState } from 'react';
// import { quiz } from "./data.js";
import { quiz } from './spellingTest.js';


const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer,setSelectedAnswer] = useState('');
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [answerList, setAnswerList] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz;
  const { question , choices, correctAnswer } = questions[activeQuestion];

  const correctAnswersArr = questions.map(x => x.correctAnswer)

  const onClickNext = () => {
    // Reset the selectedAnswerIndex, so it won't effect next question
    setSelectedAnswerIndex(null);
    // Adding one to activeQuestion (to move to the next question)
    setResult((prev) => 
      selectedAnswer ?
    {
      ...prev,
      score: prev.score + 5,
      correctAnswers: prev.correctAnswers + 1,
    }
    
    : { ...prev, wrongAnswers: prev.wrongAnswers + 1
    }
    
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {

    setSelectedAnswerIndex(index)
    answerList.push(answer)
    console.log('answerList: ', answerList)

    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      // console.log('right')
      
    } else {
      setSelectedAnswer(false)
      // alert('Wrong!')
    }

  }

  // compare the selected answers to the correct answers to find the incorrect answers
  const filterAnswers = answerList.filter((x) => correctAnswersArr.indexOf(x) === -1);

  // map the incorrect answers list to list the answer they should have chosen
  const incorrectAnswerList = filterAnswers.map((x, idx)=> correctAnswersArr[idx]);

  // Add a 0 to the question number if its less than 10
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  
  // Restart the quiz
  const refresh = () => window.location.reload(true)

  return ( 
    <div>
      <h1>Pop Quiz!</h1>
      <div className="quiz-container">
      <h4>Click the correct answer!</h4>
        
        {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          {/* <h2>{question}</h2> */}
            <ul>
              {choices.map((answer, index) => (
                <li 
                  onClick={() => onAnswerSelected(answer, index)} 
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                  {answer}
                </li>
              ))}
            </ul>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            {/* In case of last question change button title to Finish from Next */}
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
        </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Words Spelled Incorrectly:<span> 
                {incorrectAnswerList.map((x) => (
                <li>
                  {x}
                </li>
              ))}</span>
            </p>
            <button onClick={refresh}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz