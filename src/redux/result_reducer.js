import { createSlice } from "@reduxjs/toolkit";

// Create Reducer
const resultSlice = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [], //
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResult: (state, action) => {
      // Changed the action name for clarity
      state.result.push(action.payload);
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const { setUserId, pushResult, resetResultAction, updateResultAction } =
  resultSlice.actions; // Updated the action name here

export default resultSlice.reducer;
