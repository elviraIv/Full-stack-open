import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    addVote(state, action) {
      const votedAnecdote = action.payload;
      const { id } = votedAnecdote;
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      );
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});
export const { appendAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdotesService.update(anecdote);
    dispatch(addVote(votedAnecdote));
  };
};

export default anecdoteSlice.reducer;
