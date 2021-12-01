import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if(timeRemaining===0){
      setTimeRemaining(10);
      onAnswered(false);
      console.log("timeup")
    };
    const countdown = setInterval(() => {
      setTimeRemaining(timeRemaining-1)},1000);
    return function clearTimeout() {
      clearInterval(countdown);
    }
    }
  ,[timeRemaining]);
  // add useEffect code
  // use effect to countdown 10s

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
