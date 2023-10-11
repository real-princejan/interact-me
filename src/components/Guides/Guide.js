import React from "react";

import ListGuide from "./ListGuide";
import Layout from "../Layout/Layout";
// import image
import guideIMG from "../../assets/images/guide.svg";

const Guide = () => {
  return (
    <Layout title={"FAQs - Interact Me"}>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 px-8 p-10">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className="w-1/2 hidden md:block"
          >
            <img
              alt="none"
              className="p-2 gap-8 mt-24 items-center justify-center"
              src={guideIMG}
            />
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="1300"
            className="w-full md:w-1/2 px-8 mt-8"
          >
            <h2 className="font-[700] text-2xl">
              Most questions about Mental Health
            </h2>

            <ListGuide />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
