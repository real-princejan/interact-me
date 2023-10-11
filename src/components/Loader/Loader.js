import React from "react";
import ReactDOM from "react-dom";
import intLogo from "../../assets/images/interactmeLogo.png";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-300 opacity-75 z-50">
      <img
        src={intLogo}
        className="inline-block h-12 w-12 animate-spin rounded-full  border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      />
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="items-center justify-center">
      <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen opacity-75 z-50">
        <img
          src={intLogo}
          className="inline-block h-12 w-12 animate-spin rounded-full  border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
