import React, { useState } from "react";

import logIMG from "../../assets/images/login.png";

import { Link } from "react-router-dom";

const initialState = {
  password: "",
  password2: "",
};

const ResetPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;
  const handleInputChange = () => {};

  const loginUser = () => {};

  return (
    <>
      <section className="h-screen ">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}
            <div
              data-aos="fade-down-right"
              data-aos-duration="1500"
              className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12"
            >
              <img src={logIMG} className="w-full floating" alt="Phone image" />
            </div>
            {/* Right column container with form */}
            <div
              data-aos="fade-up-left"
              data-aos-duration="1500"
              className="md:w-8/12 lg:ml-6 lg:w-5/12"
            >
              <h1 className="text-3xl text-greenColor font-semibold mb-6">
                Reset Password
              </h1>
              <form onSubmit={loginUser}>
                {/* New Password input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="New Password"
                    required
                  />
                </div>

                {/* Confirm New Password input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    placeholder="Confirm New Password"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-greenColor px-7 pb-2.5 pt-3 text-md font-bold  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Get reset email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
