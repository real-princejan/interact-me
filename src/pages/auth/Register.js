import React, { useEffect, useState } from "react";

import logIMG from "../../assets/images/login.png";
import google from "../../assets/images/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, register } from "../../redux/features/auth/authSlice";
import { validateEmail } from "../../utils/index";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;
  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const timesIcon = <i className="ri-close-line text-lg text-red-500" />;
  const checkIcon = (
    <i className="ri-check-double-line text-lg text-green-500" />
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lower & Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*)/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
    // Check Number
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    // Check Special Character
    if (password.match(/([!,%,$,&,@,#,^,*,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    // Check Password Length
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const handleInputClick = () => {
    setIsDialogOpen(true);
  };

  const handleInputBlur = () => {
    setIsDialogOpen(false);
  };

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      return toast.error("Password requirements not met");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = { name, email, password };

    await dispatch(register(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/");
    }

    dispatch(RESET_AUTH());
  }, [isSuccess, isLoggedIn, dispatch, navigate]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <section className="h-screen ">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
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
                Register
              </h1>
              <form onSubmit={registerUser}>
                {/* Name input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                  />
                </div>
                {/* Email input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    required
                  />
                </div>
                {/* Password input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                    required
                  />
                  {isDialogOpen && (
                    <div className="absolute left-0 mt-2 p-2 bg-neutral-100 border border-gray-300 rounded-lg z-10">
                      {/* Lower Upper */}
                      <span>
                        {switchIcon(uCase)}
                        &nbsp; Lowercase & Uppercase
                      </span>
                      <br />
                      {/* Num */}
                      <span>
                        {switchIcon(num)}
                        &nbsp; Number (0-9)
                      </span>
                      <br />
                      {/* Special Character */}
                      <span>
                        {switchIcon(sChar)}
                        &nbsp; Special Character (!@#$%^&*)
                      </span>
                      <br />
                      {/* Password length */}
                      <span>
                        {switchIcon(passLength)}
                        &nbsp; At least 6 characters
                      </span>
                    </div>
                  )}
                </div>
                {/* Confirm Password input */}
                <div className="relative mb-6 border border-gray-400 rounded-lg">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none dark:text-gray-400"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                {/* Login  link */}
                <div className="mb-6 mt- flex items-center justify-between">
                  <span className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                    Already have account?
                  </span>

                  <Link
                    to="/login"
                    className="text-primary font-semibold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Login here
                  </Link>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-greenColor px-7 pb-2.5 pt-3 text-md font-bold  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
