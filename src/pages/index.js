import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "../images/icon.png";
import "../style/main.scss";
import { Helmet } from "react-helmet";
// import {
//   BrowserRouter,
//   Routes,
//   Route } from "react-router-dom";
import App from "../components/App";
import { Router } from "@reach/router";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Sharanya Soundararajan"}</title>
        <html lang={"en"} />
        <meta
          name="description"
          content={"Sharanya Soundararajan"}
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Router basepath="/">
        {/* <Hero path="/" /> */}
        <About path="#about" />
        <Projects path="#projects" />
      </Router>
      <App />
    </>
  );
};

export default index;
