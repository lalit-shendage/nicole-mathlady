import React from 'react';
import { useState } from "react";
import FillInTheBlankQuestion from './components/FillInTheBlankQuestion';
import MatrixSortingQuestion from './components/MatrixSortingQuestion';
import SingleChoiceQuestion from './components/SingleChoiceQuestion';
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion';
import SortingQuestion from './components/SortingQuestion';
import FreeChoice from './components/FreeChoice'

const jsonData = {
    "questions": [
      {
        "id": 1,
        "type": "free-choice",
        "prompt": "Write two plus four is equal to six in numbers",
        "required": true,
        "answer": "2+4=6"
      },
      {
        "id": 2,
        "type": "fill-in-the-blank",
        "prompt": "Sagar playes _____",
        "required": true,
        "answer": ["cricket", "football", "hockey"]
      },
      {
        "id": 3,
        "type": "matrix-sorting",
        "prompt": "Pair the following technologies with their corresponding uses:",
        "required": true,
        "options": [
          {
            "id": 1,
            "leftText": "Frontend",
            "rightText": "React"
          },
          {
            "id": 2,
            "leftText": "Backend",
            "rightText": "Node"
          },
          {
            "id": 3,
            "leftText": "Styling",
            "rightText": "CSS"
          }
        ]
      },
      {
        "id": 4,
        "type": "single-choice",
        "prompt": "What is the largest country in the world by land area?",
        "required": true,
        "options": [
          {
            "id": 1,
            "text": "Russia",
            "correct": true
          },
          {
            "id": 2,
            "text": "Canada"
          },
          {
            "id": 3,
            "text": "China"
          },
          {
            "id": 4,
            "text": "United States"
          }
        ]
      },
      {
        "id": 5,
        "type": "multiple-choice",
        "prompt": "Which of the following countries are in the European Union?",
        "required": true,
        "options": [
          {
            "id": 1,
            "text": "Spain",
            "correct": true
          },
          {
            "id": 2,
            "text": "Italy"
          },
          {
            "id": 3,
            "text": "Germany",
            "correct": true
          },
          {
            "id": 4,
            "text": "Norway"
          }
        ]
      },
      {
        "id": 6,
        "type": "sorting",
        "prompt": "Put the following words in alphabetical order:",
        "required": true,
        "options": [
          {
            "id": 1,
            "text": "bird"
          },
          {
            "id": 2,
            "text": "cat"
          },
          {
            "id": 3,
            "text": "dog"
          },
          {
            "id": 4,
            "text": "elephant"
          }
        ]
      }
    ]
  };
const QuestionList = () => {
    const [answers, setAnswers] = useState({});
  
  const handleAnswerChange = (id, value) => {
    setAnswers(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  function handleSort(questionId, sortedOptions) {
    console.log(`Question ${questionId} sorted:`, sortedOptions);
  }

  const getQuestionComponent = (question) => {
    switch (question.type) {
      case "fill-in-the-blank":
        return (
            <FillInTheBlankQuestion
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            required={question.required}
            answer={question.answer} // Add this line to pass the answer prop
            onSubmit={handleAnswerChange} // Rename onAnswerChange to onSubmit
          />
        );
    //   case "matrix-sorting":
    //     return (
    //       <MatrixSortingQuestion
    //         key={question.id}
    //         id={question.id}
    //         prompt={question.prompt}
    //         required={question.required}
    //         options={question.options}
    //         onAnswerChange={handleAnswerChange}
    //       />
    //     );
      case "single-choice":
        return (
          <SingleChoiceQuestion
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            required={question.required}
            options={question.options}
            onAnswerChange={handleAnswerChange}
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoiceQuestion
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            required={question.required}
            options={question.options}
            onAnswerChange={handleAnswerChange}
          />
        );
      case "sorting":
        return (
          <SortingQuestion
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            required={question.required}
            options={question.options}
            onSort={(sortedOptions) => handleSort(1, sortedOptions)}
          />
        );
    case "free-choice":
        return (
          <FreeChoice
            key={question.id}
            id={question.id}
            prompt={question.prompt}
            required={question.required}
            answer={question.answer}
            onAnswerChange={handleAnswerChange}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div>
       {jsonData.questions.map(question => getQuestionComponent(question))}
    </div>
  )
}

export default QuestionList
