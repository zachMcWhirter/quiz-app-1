import './App.css';
import React, { useState } from 'react';
// import { Form } from './signIn';
import Quiz from './quiz.js';
import {Modal} from './welcomeModal';


function App() {

  // const Modal = () => {

  //   return (
  //     <> 
  //       <div className='modal'>
  //         Welcome! Are you ready to begin you  quiz?
  //       </div>
  //     </>
  //   )
  // }



  return (
    <div className="App">
      <Modal></Modal>
      {/* <Form></Form> */}
      {/* <Header></Header> */}
      {/* <Quiz>
      </Quiz> */}
    </div>
  );
}






export default App;