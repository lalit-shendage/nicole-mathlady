import React, { useState } from "react";

const FreeChoiceQuestion = ({ id, prompt, required, answer, onAnswerChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onAnswerChange(id, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (value.replace(/\s+/g, '') === answer) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  return (
    <div>
      <h4>{prompt}</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Answer:
          <input id="ans" type="text" value={value} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FreeChoiceQuestion;
