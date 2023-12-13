import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;

export const createNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(setNotification(message));

    const timeoutId = setTimeout(() => {
      dispatch(setNotification(null));
    }, delay * 1000);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
};

export default notificationSlice.reducer;
