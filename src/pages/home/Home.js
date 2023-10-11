import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ShowOnLogin, {
  ShowOnLogout,
} from "../../components/HiddenLink/hiddenLink";

// import images
import mentalIMG from "../../assets/images/mentalhealth.svg";
import healthIMG from "../../assets/images/medicine.svg";
import knowIMG from "../../assets/images/knowledge.svg";
import talkIMG from "../../assets/images/talk.svg";
import heroIMG from "../../assets/images/hero_img.svg";

const Home = () => {
  return (
    <Layout title={"Interact Me"}>
      <div className="px-5 md:px-10 ">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className="max-w-[720px] lg:max-w-[842px]"
              >
                <h1 className="font-semibold mb-4 text-4xl md:text-6xl text-greenColor">
                  Know Your Mind <br /> Heal Your{" "}
                  <span className="bg-yellow-400 border rounded-3xl py--2 text-white px-1">
                    Heart
                  </span>
                </h1>
                <div className="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
                  <p className="text-xl text-[#636262]">
                    Interact, Learn, and Assess your concerns
                  </p>
                </div>
                <ShowOnLogout>
                  <div className="flex items-center">
                    <Link
                      to="/login"
                      className="inline-block cursor-pointer bg-white px-8 py-4 text-center font-semibold text-black border border-solid border-brightColor no-underline [box-shadow:rgb(241,_201,_59)_6px_6px] hover:outline-0 rounded-xl mr-5 md:mr-6 lg:mr-8"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex-row flex max-w-full items-center justify-center border border-solid border-brightColor px-6 py-3 font-semibold text-greenColor no-underline [box-shadow:rgb(241,_201,_59)_6px_6px] hover:outline-0 rounded-xl"
                    >
                      <p className="text-black">Register</p>
                    </Link>
                  </div>
                </ShowOnLogout>
                <ShowOnLogin>
                  <Link to="/homepage">
                    <button className="flex items-center mt-8 px-8 p-2 gap-2 shadow-lg rounded-lg text-md font-[600] bg-yellow-400 hover:bg-softColor transition">
                      <i class="ri-search-2-line" />
                      Find Mental Health Support today
                    </button>
                  </Link>
                </ShowOnLogin>
              </div>
              <div className="relative h-full max-h-[560px] overflow-visible max-[991px]:left-4 w-[85%] md:w-[95%] lg:w-full floating">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  src={heroIMG}
                  alt="none"
                  className="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowOnLogin>
        {/* How Can we support you page */}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="text-3xl text-center font-[600]">
                How can we{" "}
                <span className="font-[700] text-brightColor">
                  support you?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              {/* Card 1 */}
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="py-[30px] px-5"
              >
                <div className="flex items-center justify-center">
                  <img alt="none" src={mentalIMG} />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                    I want to check my mental health
                  </h2>

                  <Link
                    className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                    to="/checkin"
                  >
                    <i class="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="py-[30px] px-5"
              >
                <div className="flex items-center justify-center">
                  <img alt="none" src={healthIMG} />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                    I want to find a mental health professional
                  </h2>

                  <Link
                    className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                    to="/homepage"
                  >
                    <i class="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="py-[30px] px-5"
              >
                <div className="flex items-center justify-center">
                  <img alt="none" src={knowIMG} />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                    I want to learn about mental health
                  </h2>

                  <Link
                    className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                    to="/guide"
                  >
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How Can we support you page end */}

        {/* Reach Out */}
        <section>
          <div className="container">
            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="flex items-center justify-between flex-col lg:flex-row py-32"
            >
              <div className="xl:w-[670px]">
                <h2 className="text-3xl font-[700] text-brightColor">
                  Reach out to <br />
                  <span className="text-black">our counselor today</span>
                </h2>

                <Link to="/">
                  <button className="flex items-center mt-8 px-8 p-2 gap-2 shadow-lg rounded-lg text-md font-[600] bg-brightColor hover:bg-softColor transition">
                    <i className="ri-chat-4-line" />
                    Chat the counselor
                  </button>
                </Link>
              </div>

              {/* img */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img alt="none" className="swing" src={talkIMG} />
              </div>
            </div>
          </div>
        </section>
        {/* Reach Out End */}
      </ShowOnLogin>
    </Layout>
  );
};

export default Home;
