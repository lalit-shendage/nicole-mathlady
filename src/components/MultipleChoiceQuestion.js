import React, { useState } from 'react';

function MultipleChoiceQuestion(props) {
  const [selectedOptionIds, setSelectedOptionIds] = useState({});
  const [isCorrect, setIsCorrect] = useState(null);

  function handleOptionChange(event) {
    setSelectedOptionIds({
      ...selectedOptionIds,
      [event.target.value]: event.target.checked,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const correctOptionIds = props.options
      .filter((option) => option.correct)
      .map((option) => option.id);
    const selectedOptionIdsArray = Object.entries(selectedOptionIds)
      .filter(([id, checked]) => checked)
      .map(([id, checked]) => Number(id));
    setIsCorrect(
      selectedOptionIdsArray.length === correctOptionIds.length &&
        selectedOptionIdsArray.every((id) => correctOptionIds.includes(id))
    );
    if (props.onSubmit) {
      props.onSubmit(selectedOptionIdsArray);
    }
  }

  return (
    <div>
      <p>{props.prompt}</p>
      <form onSubmit={handleSubmit}>
        {props.options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="checkbox"
                name="option"
                value={option.id}
                checked={selectedOptionIds[option.id] || false}
                onChange={handleOptionChange}
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

export default MultipleChoiceQuestion;
