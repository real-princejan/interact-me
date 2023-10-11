import React, { useEffect, useState } from "react";
import QuestionPanel from "./QuestionPanel";

// redux import
import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";

import {
  MoveNextQuestion,
  MovePreviousQuestion,
} from "../../hooks/FetchQuestion";

import { PushAnswer } from "../../hooks/setResult";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });

  // function button next handler
  function onNext() {
    console.log("On Next click");

    if (trace < queue.length) {
      // Move to the next question
      dispatch(MoveNextQuestion());

      // insert a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  }

  // function button previous handler
  function onPrev() {
    console.log("On Previous click");

    if (trace > 0) {
      // Move to the previous question
      dispatch(MovePreviousQuestion());
    }
  }

  // Checked
  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  // Finish test after the last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }

  return (
    <div className="container">
      {/* Display Questions */}
      <div className="relative">
        <QuestionPanel onChecked={onChecked} />

        {/* Button */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex m-4 gap-4 px-2 ">
            {trace > 0 ? (
              <button
                onClick={onPrev}
                className="text-insideColor rounded-l border-l hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:opacity-90 bg-greenColor border duration-200 ease-in-out border-gray-600 transition"
              >
                <div className="flex leading-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-left w-5 h-5 ml-1"
                  >
                    <polyline points="15 18 9 12 15 6" />{" "}
                    {/* Modified points */}
                  </svg>
                  Prev
                </div>
              </button>
            ) : (
              <></>
            )}
            <button
              onClick={onNext}
              className="text-insideColor rounded-l border-l hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:opacity-90 bg-greenColor border duration-200 ease-in-out border-gray-600 transition"
            >
              <div className="flex leading-5">
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-5 h-5 ml-1"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
