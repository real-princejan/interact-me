import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import data, { answers } from "../assets/data/questionData";
// redux actions
import * as Action from "../redux/question_reducer";

// fetch question hook to fetch api data and set value store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { question, answers } }));

          // dispatch an action
          dispatch(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

// Move Next Question
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); // increase + 1
  } catch (error) {
    console.log(error);
  }
};

// Move Previous Question
export const MovePreviousQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePreviousAction()); // decrease -1
  } catch (error) {
    console.log(error);
  }
};
