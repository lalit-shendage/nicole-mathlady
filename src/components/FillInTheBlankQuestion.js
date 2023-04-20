import { useState } from "react";

function FillInTheBlankQuestion(props) {
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = props.answer.includes(answer.toLowerCase());
    if (typeof props.onSubmit === "function") {
      props.onSubmit(isCorrect);
    }
    if (isCorrect) {
      console.log(true);
    }else{
        console.log(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{props.prompt}</p>
      <input type="text" value={answer} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FillInTheBlankQuestion;
