import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

// import pages
import Home from "./pages/home/Home";
import PrivateRoute from "./components/Private/PrivateRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { getLoginStatus } from "./redux/features/auth/authSlice";
import Profile from "./pages/profile/Profile";
import About from "./components/About/About";
import MentalCheckIn from "./components/Activities/mentalcheckin";
import Question from "./components/Activities/Question";
import Quiz from "./components/Activities/Quiz";
import Contact from "./components/Contact/Contact";
import Guide from "./components/Guides/Guide";
import Result from "./components/Activities/Result";

function App() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());

    Aos.init();
  }, [dispatch]);

  return (
    <>
      <div className="max-w-[1080px] mx-auto container-snap">
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/" element={<ResetPassword />} />

            <Route path="" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/checkin" element={<MentalCheckIn />} />
              <Route path="/question" element={<Question />} />
              <Route path="/result" element={<Result />} />
              <Route path="/guide" element={<Guide />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
