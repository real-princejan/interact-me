import React from "react";
import { Link } from "react-router-dom";

// import images
import resultIMG from "../../assets/images/result.svg";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../../redux/question_reducer";
import { resetResultAction } from "../../redux/result_reducer";

// import actions

const Result = () => {
  const dispatch = useDispatch();

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <Layout title={"Result - Interact Me"}>
      <section className="block">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="py-16 md:py-24 lg:py-32">
              <div className="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="font-bold text-3xl md:text-5xl">Results</h2>
                <div className="mx-auto mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8"></div>
              </div>

              <div className="relative grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative flex-col flex h-full items-start [grid-area:1/2/2/3] max-[991px]:[grid-area:2/1/3/2]">
                  {/* 1 */}
                  <div
                    data-aos="flip-right"
                    data-aos-duration="1500"
                    className="relative mb-8 flex-row flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4  bg-white text-left align-top  text-[#222222] max-[479px]:block px-6 py-5 rounded-xl"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">
                        {" "}
                        <i className="ri-question-line" />
                      </p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        Total Questions : 5
                      </h5>
                    </div>
                  </div>
                  {/* 2 */}
                  <div
                    data-aos="flip-right"
                    data-aos-duration="1500"
                    className="relative mb-8 flex-row flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4  bg-white text-left align-top  text-[#222222] max-[479px]:block px-6 py-5 rounded-xl"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">
                        <i className="ri-error-warning-line" />
                      </p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        Result : Depressed
                      </h5>
                    </div>
                  </div>

                  {/* Button to quiz */}
                  <Link
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="relative mb-8 flex w-auto cursor-pointer items-start justify-center rounded-3xl gap-4 border border-solid bg-brightColor text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5"
                    onClick={onRestart}
                    to="/question"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-transparent">
                      <i className="ri-refresh-line font-bold text-[40px] max-[479px]:text-sm"></i>
                    </div>
                  </Link>
                </div>

                {/* picture */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="relative block overflow-hidden [grid-area:1/1/2/2] max-[991px]:[grid-area:1/1/2/2]"
                >
                  <div className="relative block">
                    <img
                      alt="none"
                      src={resultIMG}
                      className="inline-block h-full w-full max-w-full"
                    />
                  </div>
                </div>
                {/* picture end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Result;
