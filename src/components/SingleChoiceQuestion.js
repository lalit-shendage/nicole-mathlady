import React, { useState } from 'react';

function SingleChoiceQuestion(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  function handleOptionSelect(optionId) {
    setSelectedOption(optionId);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const selectedOptionObject = props.options.find(option => option.id === selectedOption);
    if (selectedOptionObject.correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <div>
      <h2>{props.prompt}</h2>
      <form onSubmit={handleFormSubmit}>
        {props.options.map(option => (
          <div key={option.id}>
            <label>
              <input
                type="radio"
                name="options"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                required={props.required}
              />
              {option.text}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
      )}
    </div>
  );
}

export default SingleChoiceQuestion;
