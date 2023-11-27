import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {" "}
      {text} {value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let all = Number(good + neutral + bad);
  let score = 1 * good + -1 * bad;
  let average = score / all;
  let positive = (good / all) * 100;
  const hasFeedback = all > 0;

  const goodFeedbackHandler = () => setGood(good + 1);
  const neutralFeedbackHandler = () => setNeutral(neutral + 1);
  const badFeedbackHandler = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={goodFeedbackHandler} />
      <Button text="neutral" handleClick={neutralFeedbackHandler} />
      <Button text="bad" handleClick={badFeedbackHandler} />
      <h1>statistics</h1>

      {hasFeedback ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
