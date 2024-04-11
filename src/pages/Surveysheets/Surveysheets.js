import React, { useState } from 'react';
import './Surveysheets.css';
import questionsData from './questions.json';


const QuestionCard = ({ question, options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
    return (
      <div className="question-card">
        <h3>{question}</h3>
        <ul>
          {options.map((option, index) => (
            <li key={index}> <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionSelect(option)}
              style={{ display: 'none' }}
            />
            <div className="circle-box" />
            {option}
          </label>
        </li>
      ))}
    </ul>
  </div>
);
};
const Surveysheets = () => {
  return (
    <div>
    <div className="sheet">
      <h4>New year Sales</h4>
    </div>
    <div className="para">
        <h2>New Year Sales</h2>
        <button class='edit-survey'>Edit This Survey</button>
        <p className="small-paragraph">"Help us improve your future shopping experiences by sharing your feedback on our recent New Year sales event! Your input is invaluable in understanding what worked well and what could be enhanced. This brief questionnaire aims to gather insights into your satisfaction levels, factors influencing your participation, shopping preferences, and any challenges encountered. Your responses will assist us in tailoring our offerings and services to better meet your needs. Thank you for taking the time to share your thoughts with us!"</p>
       
        </div>
    <div className="app">
      {questionsData.map((question, index) => (
         <div key={index} className="question-box">
        <QuestionCard key={index} question={question.question} options={question.options} />
        </div>
      ))}
    </div>
    <p className="down-paragraph">Thank you for participating in our survey! Your feedback is greatly appreciated</p>
    
    </div>
  )
}

export default Surveysheets;