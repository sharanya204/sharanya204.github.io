import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Hero = () => {
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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title title">Hiya, I'm Sharanya --</h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title subtitle">
            UX enthusiast and builder of things
          </h1>
          <h1 className="hero-title intro">
            I have a background in visual communication and user experience
            design, and I'm passionate about engineering engaging experiences
            using a variety of media, frequently combining art and code.
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <a
            href="#projects"
            aria-label="To Projects"
            className="hero-transition"
          >
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </a>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
