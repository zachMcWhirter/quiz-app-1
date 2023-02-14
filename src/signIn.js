import React, { useState } from "react";


export const Form = (props) => {
  const [name, setName] = useState('');
  const [quizType, setQuizType] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {name, quizType};
      // data[e.target.id] = e.target.value
      // setFormFields(data)
      console.log(data)
      // alert(`Welcome ${name}! \nAre you ready to begin your ${quizType} quiz?`)
    }

  // console.log(name)
  // console.log(quizType)
  
  return (

          <form 
            className="quiz-container"
            onSubmit={handleSubmit}
            >
              <div>
                <input 
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <select
                  name="quizType"
                  // placeholder="Quiz Type"
                  onChange={(e) => setQuizType(e.target.value)}
                  value={quizType}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Spelling">Spelling</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                </select>
              </div>         
            <button>Submit</button>
          </form>
  )
}