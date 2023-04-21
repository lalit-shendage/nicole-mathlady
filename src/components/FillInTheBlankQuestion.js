import { useState } from "react";

function FillInTheBlankQuestion(props) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowercaseAnswer = typeof props.answer === 'string' ? props.answer.toLowerCase() : props.answer;
    const lowercaseUserAnswer = answer.toLowerCase();
    const correct = lowercaseAnswer === lowercaseUserAnswer;
    setIsCorrect(correct);
    props.onSubmit(correct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{props.prompt}</p>
      <input type="text" value={answer} onChange={handleChange} />
      <button type="submit">Submit</button>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
      )}
    </form>
  );
}

export default FillInTheBlankQuestion;
