import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    addVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    createAnecdote (state, action) {
      const newAnecdote = action.payload
      state.push(newAnecdote)
    }
  },
});
export const { appendAnecdote, addVote, setAnecdotes, createAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
