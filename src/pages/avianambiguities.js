import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

import favicon from "../images/icon.png";
import "../style/main.scss";
import { Helmet } from "react-helmet";
import Title from "../components/Title/Title";

import { Router } from "@reach/router";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import AvianImg from "../components/Image/AvianImg";

const aa = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <>
      <nav className="nav">
        <Link className="nav__text" to="/">
          Home
        </Link>
        <Link className="nav__text" to="/#projects">
          Projects
        </Link>
        <Link className="nav__text" to="/#about">
          About
        </Link>
      </nav>
      <Container>
        <Title title="Avian Ambiguities" />
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__info">
                <p className="aa-wrapper__info-text">
                  The Avian Ambiguities is a visual narrative, developed over four months,
                  of the various hypotheses of the origin of bird flight. It expounds upon the
                  theories and objections raised by myriad illustrious scientists, naturalists,
                  philosophers and paleontologists: Thomas Huxley, Richard Owen, Charles Darwin,
                  Samuel Wilbeforce, Anaximander, Louis Pasteur, Fred Hoyle, Samuel Wendell Williston,
                  Othniel Marsh, Kenneth Dial, John Reuben and Devon Quick, in addition to the theorists themselves.
                  {"\n"}<br />
                  <br />
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={12} sm={2}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__image">
                <AvianImg
                  alt="evolution"
                  filename={"evolution.png"}
                />
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__info">
                <p className="aa-wrapper__info-text">
                  Two galactic microorganisms are recording the Earth’s history prior to its destruction by a comet.
                  {"\n"}<br />
                  <br />
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={12} sm={2}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__image">
                <AvianImg
                  alt="evolution"
                  filename={"flight.png"}
                />
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__info">
                <p className="aa-wrapper__info-text">
                  The tone of the narrative is informal and scientific terminology has been kept to a minimum.
                  Much of the dialog is a paraphrase of statements, questions and interjections the characters have been recorded as saying.
                  The original quotes have been included on the page in some instances. Each character is introduced with his or her name,
                  professions, and a line or two on their work, or personality.
                  {"\n"}<br />
                  <br />
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={12} sm={2}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__image">
                <AvianImg
                  alt="evolution"
                  filename={"fossil.png"}
                />
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="aa-wrapper" style={{ paddingBottom: 50 }}>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="aa-wrapper__info">
                <p className="aa-wrapper__info-text">
                  The evolution of life as we know is a complex, intricate process of painstaking development that
                  we may never fully decipher – as evidenced by the myriad theories attributed to the origin of
                  birds and its uncertainty even today. This book is intended to showcase the development of these
                  conflicting theories of the evolution of birds as a synecdoche for our ambivalence in understanding
                  our own creation, elaborating on our methods of unearthing, proving, presenting and maintaining
                  knowledge and our unending iterative process of attempting to make sense of it.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default aa;
