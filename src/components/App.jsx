import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "gatsby";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";

import { PortfolioProvider } from "../context/context";

import { heroData, aboutData, projectsData, footerData } from "../mock/data";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    // setWorkex([ ...workexData]);
    // setFunStuff([ ...funStuffData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, projects, about, footer }}>
      <nav className="nav">
        <Link className="nav__text" to="/">
          Home
        </Link>
        <Link className="nav__text" to="#projects">
          Projects
        </Link>
        <Link className="nav__text" to="#about">
          About
        </Link>
      </nav>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
