import React from "react";
import { Link } from "react-router-dom";
import intLOGO from "../../assets/images/interactlogo.SVG";

const socialLinks = [
  {
    path: "#",
    icon: <i className="ri-facebook-line" />,
  },
  {
    path: "https://github.com/real-princejan/interactme",
    icon: <i className="ri-github-line" />,
  },
  {
    path: "#",
    icon: <i className="ri-twitter-x-line" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/checkin",
    display: "Activities",
  },
];

const quickLinks02 = [
  {
    path: "/checkin",
    display: "Check-in",
  },
  {
    path: "/checkin",
    display: "Talk to Professional",
  },
  {
    path: "/guide",
    display: "Mental Health Guide",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container mx-auto border-t p-4">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* Left side content */}
          <div className="w-full md:w-auto">
            <img alt="none" src={intLOGO} />
            <p className="text-md leading-7 font-[400] mt-4">
              Copyright © {year} developed by Team Milyonaryo <br />
              All right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-brightColor"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 1st */}
          <div className="w-full md:w-auto">
            <h2 className="text-md leading-[30px] font-[700] mb-6">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-md leading-7 font-[400]">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 2nd */}
          <div className="w-full md:w-auto">
            <h2 className="text-md leading-[30px] font-[700] mb-6">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-md leading-7 font-[400]">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 3rd */}
          <div className="w-full md:w-auto">
            <h2 className="text-md leading-[30px] font-[700] mb-6">Support</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-md leading-7 font-[400]">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
