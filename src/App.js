import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Quiz from './quiz.js';


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Quiz>
      </Quiz>
    </div>
  );
}

export default App;