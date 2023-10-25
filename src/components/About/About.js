import React from "react";

// import components
import r1img from "../../assets/images/about.svg";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Interact Me"}>
      <section className="font-[500]" data-aos="fade-down-right">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="py-16 md:py-24 lg:py-32">
              <div className="flex flex-col items-start gap-8 lg:gap-[100px]">
                <div className="flex max-w-[592px] flex-col items-start gap-8 lg:gap-[60px]">
                  <h2 className="font-bold text-3xl md:text-5xl">
                    About Interact Me
                  </h2>
                  <p className="flex-col text-[#808080] max-[479px]:text-sm">
                    Welcome to Interact Me, a place dedicated to promoting
                    mental health and providing valuable resources to
                    individuals seeking support. Our team of mental health
                    experts, clinicians, and psychologists are here to guide you
                    on your journey toward better mental well-being.
                  </p>
                </div>
                <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
                  <img
                    src={r1img}
                    alt="none"
                    className="inline-block h-full w-full max-w-full object-cover rounded-2xl"
                  />
                  <div className="flex w-full flex-col items-start gap-5 border border-solid border-black p-20 rounded-2xl">
                    <h2 className="font-bold text-3xl md:text-5xl">
                      Our Mission
                    </h2>
                    <p className="flex-col text-[#808080] max-[479px]:text-sm">
                      At Interact Me, our mission is to raise awareness about
                      mental health, reduce stigma, and empower individuals to
                      take control of their emotional and psychological
                      well-being. We believe that everyone deserves access to
                      reliable mental health information and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
