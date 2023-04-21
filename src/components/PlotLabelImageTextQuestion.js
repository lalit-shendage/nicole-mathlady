import React, { useState, useRef, useEffect } from 'react';

function PlotLabelImageTextQuestion(props) {
    // const [pointAnswers, setPointAnswers] = useState({});
    // const [labelAnswers, setLabelAnswers] = useState({});
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [clickedPoints, setClickedPoints] = useState([]);
    const canvasRef = useRef(null);
    const [answerMessage, setAnswerMessage] =useState([])
  console.log(props.prompt)
    useEffect(() => {
      const image = new Image();
      image.onload = () => {
        setImageDimensions({ width: image.width, height: image.height });
      };
      image.src = props.imageURL;
    }, [props.imageURL]);
  
    const handleCanvasClick = (event) => {
      const canvas = canvasRef.current;
      const canvasRect = canvas.getBoundingClientRect();
      const x = Math.round((event.clientX - canvasRect.left) * (canvas.width / canvasRect.width));
      const y = Math.round((event.clientY - canvasRect.top) * (canvas.height / canvasRect.height));
      setClickedPoints([...clickedPoints, { x, y }]);
    };
  
    const handleClearClick = () => {
      setClickedPoints([]);
    };
  
    const handleSubmitClick = () => {
      
        // Check if number of clicked points is equal to number of points in the database
        if (clickedPoints.length !== props.points.length) {
          setAnswerMessage('Incorrect!');
          return;
        }
      
        // Compare clicked points with points in the database
        const pointTolerance = 10; // Tolerance for point matching
        const correctPoints = props.points.filter((point) => {
          return clickedPoints.some((clickedPoint) => {
            return (
              clickedPoint.x >= point.x - pointTolerance &&
              clickedPoint.x <= point.x + pointTolerance &&
              clickedPoint.y >= point.y - pointTolerance &&
              clickedPoint.y <= point.y + pointTolerance
            );
          });
        });
      
        // Check if all clicked points are correct
        if (correctPoints.length === props.points.length) {
          setAnswerMessage('Correct!');
        } else {
          setAnswerMessage('Incorrect!');
        }
      };
      
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);
      clickedPoints.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, 20, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();
        context.stroke();
      });
    }, [clickedPoints]);
  
    return (
      <div>
        <p>{props.prompt}</p>
        <img
          src={props.imageURL}
          alt="Question Image"
          width="300"
          style={{display:"none"}}
        />
        <canvas
          ref={canvasRef}
          width={imageDimensions.width}
          height={imageDimensions.height}
          onClick={handleCanvasClick}
        //   width="300"
          style={{ maxWidth: '100%' }}
        />
        <button onClick={handleClearClick}>Clear Points</button>
        <button onClick={handleSubmitClick}>Submit Answers</button>
        {answerMessage && <p>{answerMessage}</p>}
        {/* <p>{props.instructions}</p> */}
      </div>
    );
  }
export default PlotLabelImageTextQuestion