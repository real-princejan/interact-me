import React from "react";
// import link
import { Link } from "react-router-dom";

// import images
import picture from "../../assets/images/meditate.svg";
import Layout from "../Layout/Layout";

const MentalCheckIn = () => {
  return (
    <Layout title={"Check In - Interact Me"}>
      <div className="w-full py-20">
        <div className="md:max-w-[1080] m-auto grid md:grid-cols-2">
          {/* text */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="flex flex-col justify-start gap-4 py-24"
          >
            <h1 className="py-2 md:text-5xl text-4xl font-[700] text-greenColor">
              Mental Health <br />
              Check-In
            </h1>
            <p className="py-2 text-lg text-gray-600">
              You may feel healthy one day and a bit unsettled the next.
              Sometimes you start healing in a few days and other times you
              struggle. You may even feel in crisis.
            </p>

            <Link to="/question">
              <button className="flex items-center mt-8 px-6 p-2 gap-2 shadow-lg rounded-xl text-md font-[600] bg-brightColor hover:bg-softColor transition">
                <i className="ri-play-line" />
                Start
              </button>
            </Link>
          </div>

          <img
            alt="none"
            className="floating md:order-last order-first"
            src={picture}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MentalCheckIn;
