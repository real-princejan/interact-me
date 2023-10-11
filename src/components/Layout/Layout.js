import React from "react";

import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Components

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Interact Me - Mental Health Assesment",
  description: "Full Stack Project",
  keywords: "mern, react, node, express",
  author: "Mga Milyonaryo",
};

export default Layout;
