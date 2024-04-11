import React, { useState } from 'react';
import './Newsurvey.css';

const Newsurvey = () => {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: '', title: '', options: [] }]);
  };

  const handleQuestionTypeChange = (index, type) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].type = type;
    setQuestions(updatedQuestions);
  };

  const handleQuestionTitleChange = (index, title) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].title = title;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="survey-container">
    <h2>Create New Survey</h2>
      <input
        type="text"
        placeholder="Survey Title"
        value={surveyTitle}
        onChange={(e) => setSurveyTitle(e.target.value)}
      />
      {questions.map((question, index) => (
        <div key={index}>
          <select
            value={question.type}
            onChange={(e) => handleQuestionTypeChange(index, e.target.value)}
          >
            <option value="">Select Question Type</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="checkboxes">Checkboxes</option>
            <option value="starRating">Star Rating</option>
            <option value="dropdown">Dropdown</option>
            <option value="fileUpload">File Upload</option>
            <option value="ranking">Ranking</option>
            <option value="imageChoice">Image Choice</option>
            <option value="commentBox">Comment Box</option>
            <option value="singleTextbox">Single Textbox</option>
            <option value="slider">Slider</option>
            <option value="matrixRatingScale">Matrix/Rating Scale</option>
          </select>
          <input
            type="text"
            placeholder="Question Title"
            value={question.title}
            onChange={(e) => handleQuestionTitleChange(index, e.target.value)}
          />
          {question.type === 'multipleChoice' && (
            <div>
              <input
                type="text"
                placeholder="Option"
                value={question.options[0]}
                onChange={(e) => handleOptionChange(index, 0, e.target.value)}
              />
              <button>Add Option</button>
            </div>
          )}
          {/* Render other question types similarly */}
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Another Question</button>
      <button>Save Survey</button>
    </div>
  );
};

export default Newsurvey;
