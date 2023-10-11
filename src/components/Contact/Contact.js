import React from "react";

// import components
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact us - Interact Me"}>
      <div className="px-5 md:px-10">
        <div
          className="mx-auto w-full max-w-7xl"
          data-aos="slide-up"
          data-aos-duration="1200"
        >
          <div className="py-12 md:py-16 lg:py-20">
            <div className="flex-col flex items-stretch gap-[70px]">
              <div className="flex-col flex items-center gap-5 text-center">
                <div className="flex items-center justify-center rounded-[80px] border border-solid border-[#cfe9e7] bg-[#e7eaf1] py-2 text-sm font-semibold uppercase text-black px-5">
                  Contact us
                </div>
                <h2 className="font-bold text-3xl md:text-5xl">
                  We're Here to Assist You
                </h2>
                <p className="text-[#575757]">
                  Got questions or need assistance? <br />
                  We're here to help you make the most of your marketing
                  efforts.
                </p>
              </div>
              <div className="grid gap-[58px] max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 md:grid-cols-3">
                <div className="flex-col flex w-full items-center gap-6 border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb6a5cb6fdbf914c127_contact%201.svg"
                    alt="none"
                    className="inline-block max-w-full rounded-[100%] h-24 w-24"
                  />
                  <a
                    href="tel:+11114434534"
                    className="font-bold text-[#002d40] text-lg lg:text-2xl"
                  >
                    #000-0000-0000
                  </a>
                </div>
                <div className="flex-col flex w-full items-center gap-6 border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb621086db3a081d24d_contact%202.svg"
                    alt="none"
                    className="inline-block max-w-full rounded-[100%] h-24 w-24"
                  />
                  <a
                    href="mailto:Email@email.co"
                    className="font-bold text-[#002d40] text-lg lg:text-2xl"
                  >
                    Email@email.co
                  </a>
                </div>
                <div className="flex-col flex w-full items-center gap-6 border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74bb6b01ee5b8427e76d9_contact%203.svg"
                    alt="none"
                    className="inline-block max-w-full rounded-[100%] h-24 w-24"
                  />
                  <a
                    href="tel:+11114434534"
                    className="font-bold text-[#002d40] text-lg lg:text-2xl"
                  >
                    University of Pangasinan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
