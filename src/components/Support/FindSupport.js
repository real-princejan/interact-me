import React from "react";
import Layout from "../Layout/Layout";

import findIMG from "../../assets/images/find.svg";

const findSupport = () => {
  return (
    <Layout title={"Find Mental Health Support - Interact Me"}>
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
          <div className="mx-auto flex-col flex items-center justify-center max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:[grid-area:2/1/3/2]">
            <img
              src={findIMG}
              alt
              className="mx-auto inline-block h-full w-full max-w-[640px]"
            />
          </div>
          <div className="flex-col flex items-start max-[991px]:max-w-[720px] max-[991px]:[grid-area:1/1/2/2]">
            <h2 className="font-bold mb-4 text-3xl md:text-5xl">
              Find a mental health professional <br />
            </h2>
            <div className="max-w-[480px]">
              <p className="text-[#647084]">
                Figuring out who to see to support your mental health can be
                hard – psychologist, counsellor, psychiatrist or someone else?
                Often the best place to start is talking to your GP. <br />{" "}
                <br />
                On this page we explain what different mental health
                professionals do and how to find mental health services near
                you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}

      <section className="block">
        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          className="py-16 md:py-24 lg:py-32 px-5 md:px-10"
        >
          <div className="mx-auto w-full max-w-7xl bg-brightColor px-4 py-12">
            <div className="py-16 md:py-24 lg:py-32">
              <div className="mx-auto w-full max-w-3xl max-[479px]:px-2">
                <div className="text-center">
                  <div className="max-[991px]:mx-auto max-[991px]:max-w-[720px] mb-6 md:mb-10 lg:mb-12">
                    <h2 className="font-bold mb-4 text-3xl md:text-5xl">
                      Connect with the <br />
                      Philippine Mental Health Organization
                    </h2>
                    <div className="mx-auto max-w-[630px]">
                      <p className="text-[#636262] max-[479px]:text-sm">
                        If you’re worried about a friend or family member, here
                        is something you can do support them.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://mentalhealthph.org/"
                    className="inline-block items-center bg-white rounded-xl px-6 py-3 text-center font-semibold text-black mb-4"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works End */}
    </Layout>
  );
};

export default findSupport;
