import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let score = (1 * good) + (-1 * bad);
  let average = score / all;
  let positive = good / all * 100

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} % </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedbackHandler = () => setGood(good + 1);
  const neutralFeedbackHandler = () => setNeutral(neutral + 1);
  const badFeedbackHandler = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={goodFeedbackHandler} />
      <Button text="neutral" handleClick={neutralFeedbackHandler} />
      <Button text="bad" handleClick={badFeedbackHandler} />

      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
