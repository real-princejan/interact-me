import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import resultReducer from "./result_reducer";
import questionSlice from "./question_reducer";

// Combine your reducers directly without nesting them
const rootReducer = combineReducers({
  auth: authReducer,
  questions: questionSlice,
  result: resultReducer,
});

export const store = configureStore({
  reducer: rootReducer, // Use the combined rootReducer
});
