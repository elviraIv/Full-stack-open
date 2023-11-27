import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdotes = ({ anecdotes, points }) => {
  return (
    <>
      {anecdotes}
      <br />
      has {points} votes
      <br />
    </>
  );
};

const MostFavouriteAnecdote = ({ points, anecdotes }) => {
  let favourite = Math.max(...points);
  let position = points.indexOf(favourite);

  if (favourite === 0) {
    return <p>no feedback given</p>;
  } else if (favourite === 1) {
    return (
      <>
        {anecdotes[position]}
        has {points[position]} vote
      </>
    );
  }

  return (
    <>
      {anecdotes[position]}
      <br />
      has {points[position]} votes
      <br />
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const selectRandomAnecdote = () =>
    setSelected(() => Math.floor(Math.random() * anecdotes.length));

  const Vote = () => {
    const addPoint = [...points];
    addPoint[selected] += 1;
    setPoints(addPoint);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdotes anecdotes={anecdotes[selected]} points={points[selected]} />
      <Button text="vote" handleClick={Vote} />
      <Button text="next anecdote" handleClick={selectRandomAnecdote} />
      <h1>Anecdote with most votes</h1>
      <MostFavouriteAnecdote points={points} anecdotes={anecdotes} />
    </>
  );
};

export default App;
