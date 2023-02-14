import React, { useState } from "react";
// import Form from "./signIn";
import Quiz from './quiz.js'

export const Modal = () => {

  const [showModal, setShowModal] = useState(true);
  // const onClick = setShowModal(true);

  return (
    <div className='quiz-container'>
      <div className='modal'>
        {
          showModal ? (
          <div> 
            <h3>
              Welcome to Pop Quiz! Are you ready to begin?
            </h3>
            <button
              onClick={() => setShowModal(false)}
            >
              Let's do this!
            </button>
          </div>
          ) : <Quiz></Quiz>
        }
        
      </div>
    </div>
  )
}