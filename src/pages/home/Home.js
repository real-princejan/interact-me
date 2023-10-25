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
                  <Link to="/guide">
                    <button className="flex items-center mt-8 px-8 p-2 gap-2 shadow-lg rounded-lg text-md font-[600] bg-yellow-400 hover:bg-softColor transition">
                      <i class="ri-search-2-line" />
                      Learn about mental health
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
                    to="/find-a-mental-health-support"
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

        {/* How it Works */}
        <section>
          <div className="container">
            {/* Container */}
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              {/* Heading Div */}
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="mx-auto w-full max-w-3xl m-4"
              >
                {/* Component */}
                <div className="text-center">
                  <p className="uppercase text-brightColor">3 easy steps</p>
                  <h2 className="text-3xl font-semibold md:text-5xl">
                    How it{" "}
                    <span className="bg-cover bg-center bg-no-repeat text-brightColor">
                      works
                    </span>
                  </h2>
                </div>
              </div>
              {/* How it Works Div */}
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8"
              >
                {/* How it Works Item */}
                <div className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                    <p className="text-xl font-bold">1</p>
                  </div>
                  <p className="mb-2 text-xl font-semibold">
                    Check your mental health
                  </p>
                  <p className="text-sm text-[#636262]">
                    Check your mental health status by answering (5) simple
                    questions
                  </p>
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                    alt
                    className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
                  />
                </div>
                {/* How it Works Item */}
                <div className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                    <p className="text-xl font-bold">2</p>
                  </div>
                  <p className="mb-2 text-xl font-semibold">
                    Contact the support
                  </p>
                  <p className="text-sm text-[#636262]">
                    By clicking the button below you can ask questions about
                    your mental health status
                  </p>
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                    alt
                    className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto"
                  />
                </div>
                {/* How it Works Item */}
                <div className="relative flex flex-col items-center gap-4 p-8 text-center">
                  <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                    <p className="text-xl font-bold">3</p>
                  </div>
                  <p className="mb-2 text-xl font-semibold">Done!</p>
                  <p className="text-sm text-[#636262]">
                    Hopefully this can help you to be better!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How it works End */}

        {/* Reach Out */}
        <section>
          <div className="container">
            <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div
                data-aos="flip-right"
                data-aos-duration="1500"
                className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center"
              >
                <div className="mb-6 max-w-[720px] md:mb-10 lg:mb-12 lg:max-w-[800px]">
                  <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                    Join the Interact Me community
                  </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-white border px-8 py-5 font-bold text-blackColor transition hover:text-brightColor"
                  >
                    <img
                      src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d17434dca744efe218e_Vector.png"
                      alt="Twitter Icon"
                      className="inline-block w-6"
                    />
                    <p className>Twitter</p>
                  </a>
                  <a
                    href="#"
                    className="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-white border px-8 py-5 font-bold text-blackColor transition hover:text-brightColor"
                  >
                    <img
                      src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d1739fa5520329c82de_Vector-1.png"
                      alt="Discord Icon"
                      className="inline-block w-6"
                    />
                    <p className>Discord</p>
                  </a>
                  <a
                    href="#"
                    className="flex max-w-full flex-row items-center justify-start gap-4 rounded-full bg-white border px-8 py-5 font-bold text-blackColor transition hover:text-brightColor"
                  >
                    <img
                      src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f1d0dc3a358f7fc440fb0_Vector-2.png"
                      alt="Snapchat Icon"
                      className="inline-block w-6"
                    />
                    <p className>Snapchat</p>
                  </a>
                </div>
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
