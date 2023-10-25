import React, { useState } from "react";
// import link
import { Link } from "react-router-dom";

// import components
import Layout from "../Layout/Layout";

// import images
import questIMG from "../../assets/images/question.svg";

const Question = () => {
  // Function to show a confirmation dialog when proceeding
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to open the pop-up window
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Function to close the pop-up window
  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <Layout title={"Instructions - Interact Me"}>
      <section className="block">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="py-16 md:py-24 lg:py-32">
              <div className="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="font-bold text-3xl md:text-5xl">How it works</h2>
                <div className="mx-auto mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8">
                  <p className="text-[#636262] max-[479px]:text-sm">
                    We'll ask you to think about how you've been feeling lately.
                    You then need to answer 5 questions.
                  </p>
                </div>
              </div>

              <div className="relative grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative flex-col flex h-full items-start [grid-area:1/2/2/3] max-[991px]:[grid-area:2/1/3/2]">
                  {/* 1 */}
                  <div
                    data-aos="flip-right"
                    data-aos-duration="1500"
                    className="relative mb-8 flex-row flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4 border border-solid bg-white text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5 rounded-xl"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">1</p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        Answer 5 questions about how you’ve been feeling lately.
                      </h5>
                    </div>
                  </div>
                  {/* 2 */}
                  <div
                    data-aos="flip-left"
                    data-aos-duration="1500"
                    className="relative mb-8 flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4 border border-solid bg-white text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">2</p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        Your answers help us suggest which stage you’re at on
                        the mental health continuum.
                      </h5>
                    </div>
                  </div>
                  {/* 3 */}
                  <div
                    data-aos="flip-right"
                    data-aos-duration="1500"
                    className="relative mb-8 flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4 border border-solid bg-white text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">3</p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        Each question has two (2) options, you can only choose
                        one.
                      </h5>
                    </div>
                  </div>
                  {/* 4 */}
                  <div
                    data-aos="flip-left"
                    data-aos-duration="1500"
                    className="relative mb-8 flex w-auto max-w-[496px] cursor-default items-start justify-center gap-4 border border-solid bg-white text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5"
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f7]">
                      <p className="font-bold max-[479px]:text-sm">4</p>
                    </div>
                    <div className="ml-4 flex-col flex-initial flex w-auto items-start gap-2">
                      <h5 className="text-lg opacity-80 font-bold">
                        The result will be declared at the end of the test.
                      </h5>
                    </div>
                  </div>

                  {/* Button to quiz */}
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="relative mb-8 flex w-auto cursor-pointer items-start justify-center rounded-3xl gap-4 border border-solid bg-brightColor text-left align-top hover:bg-softColor text-[#222222] max-[479px]:block px-6 py-5"
                    onClick={openPopup}
                  >
                    <div className="flex-col flex-none flex h-10 w-10 items-center justify-center rounded-full bg-transparent">
                      <i className="ri-play-line font-bold text-[40px] max-[479px]:text-sm"></i>
                    </div>
                  </div>
                </div>

                {/* Pop-up window */}
                {isPopupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                      <p className="text-lg font-bold mb-4">
                        Do you want to proceed to the test?
                      </p>
                      <div className="flex justify-end">
                        <button
                          className="mr-4 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                          onClick={closePopup}
                        >
                          Cancel
                        </button>
                        <Link to="/quiz">
                          <button
                            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                            onClick={closePopup}
                          >
                            Proceed
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* picture */}
                <div className="relative block overflow-hidden [grid-area:1/1/2/2] max-[991px]:[grid-area:1/1/2/2]">
                  <div className="relative block">
                    <img
                      alt="none"
                      src={questIMG}
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

export default Question;
