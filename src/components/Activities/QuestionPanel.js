import React, { useEffect, useState } from "react";
import questionData from "../../assets/data/questionData";
import feeling from "../../assets/images/feeling.svg";

// Custom hook
import { useFetchQuestion } from "../../hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../../hooks/setResult";

const QuestionPanel = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  // useSelector((state) => console.log(state));
  const totalQuestions = questionData.length;

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log({ trace, checked });
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  if (isLoading) return <h3 className="text-black">isLoading</h3>;
  if (serverError)
    return <h3 className="text-red-600">{serverError || "Unknown Error"}</h3>;

  // Function to handle the exit button click
  function onExit() {
    const shouldExit = window.confirm(
      "Are you sure you want to exit the Mental Health Check-in?"
    );

    if (shouldExit) {
      // If the user confirms, navigate back to the Question.jsx page
      window.location.href = "/question";
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-end z-[-1]">
        <img src={feeling} alt="none" className="w-72 h-auto" />
      </div>

      {/* Exit button */}
      <button
        onClick={onExit}
        className="absolute top-2 right-2 px-2 py-1 rounded-full focus:outline-none flex items-center"
      >
        <p className="mr-2">Exit Mental Health Check-in</p>
        <i className="ri-close-circle-line text-3xl"></i>
      </button>

      <div className="flex justify-center items-center h-screen">
        {/* Centered content */}
        <div>
          <h3 className="mb-5 text-3xl font-[700] text-gray-900">
            {questions?.question}
          </h3>
          <p className="text-lg text-gray-500 mb-3">
            {questions?.id}/{totalQuestions}
          </p>
          <ul key={questions?.id} className="grid w-full gap-6 md:grid-cols-2">
            {/* 1st */}
            {questions?.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  id={`q${i}-option`}
                  value={false}
                  onChange={() => onSelect(i)}
                  name="option"
                  className="hidden peer"
                />
                <label
                  htmlFor={`q${i}-option`}
                  className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-bgColor border border-gray-200 rounded-lg cursor-pointer peer-checked:border-veryColor peer-checked:text-brightColor hover:text-gray-600 hover:bg-gray-100 ${
                    result[trace] === i
                      ? " inline-flex items-center justify-between w-full p-5 bg-bgColor text-veryColor border rounded-lg cursor-pointer border-veryColor"
                      : ""
                  }`}
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{q}</div>
                  </div>
                  <i className="ri-arrow-right-line w-5 h-5 ml-3"></i>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
