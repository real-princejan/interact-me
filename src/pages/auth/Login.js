import React, { useEffect, useState } from "react";

import logIMG from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../utils/index";
import { RESET_AUTH, login } from "../../redux/features/auth/authSlice";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isLoggedIn, isSuccess, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = { email, password };
    console.log(userData);

    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn && user) {
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    }

    dispatch(RESET_AUTH());
  }, [isSuccess, isLoggedIn, user, dispatch, navigate]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <section className="h-screen overflow-y-hidden">
        <div className="container h-full px-2 py-24">
          <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}
            <div
              data-aos="fade-down-right"
              data-aos-duration="1500"
              className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12"
            >
              <img src={logIMG} className="w-full floating" alt="Phone" />
            </div>
            {/* Right column container with form */}
            <div
              data-aos="fade-up-left"
              data-aos-duration="1500"
              className="md:w-8/12 lg:ml-6 lg:w-5/12"
            >
              <h1 className="text-3xl text-greenColor font-semibold mb-6">
                Login
              </h1>
              <form onSubmit={loginUser}>
                {/* Email input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                  />
                </div>
                {/* Password input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="mb-6 flex items-center justify-between">
                  {/* Forgot password link */}
                  <Link
                    to="/forgot-password"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </Link>
                  {/* Register  link */}
                  <Link
                    to="/register"
                    className="text-primary font-semibold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Register here
                  </Link>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-greenColor px-7 pb-2.5 pt-3 text-md font-bold  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
