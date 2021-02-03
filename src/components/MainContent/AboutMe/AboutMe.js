import React from "react";
import {
  AnimatedText1,
  AnimatedText2,
} from "../../../StyledComponentsShared/AnimatedText";
import Container from "../../../StyledComponentsShared/Container";
import Button from "../../../StyledComponentsShared/Button";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import TitleBig from "../../../StyledComponentsShared/TitleBig";
import Text from "../../../StyledComponentsShared/Text";
import TextBold from "../../../StyledComponentsShared/TextBold";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <Container id="About Me" background="#fff">
      <TitleSmall>INFORMATION</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>ABOUT ME</TitleBig>
      </Fade>

      <Fade left delay={300} distance="60px">
        <TextBold>
          I'm Ali Eliacik &<AnimatedText1>Front-End Developer</AnimatedText1>
          <AnimatedText2>UX/UI Developer</AnimatedText2>
        </TextBold>
        <Text>
          Highly skilled and self-motivated professional with hands-on
          experience developing, testing, and maintaining website in a fast
          paced environment. Proven ability to develop custom web applications
          for internal and customer-facing audiences with a variety of
          functionalities and features. <br />
          <br /> Capability to write modular, reusable, and version-controlled
          code to build responsive websites based on client specifications and
          design requirements. Adept at managing multiple concurrent projects,
          consistently remaining on or ahead of schedule through effective
          prioritization and planning. <br />
          <br />
          Dedicated to continually learning emerging technologies, programming
          languages, techniques, and other best practices. Talent for quickly
          learning new information, procedures, and technologies. Exceptionally
          organized and able to multitask. <br />
          <br /> Possesses excellent communication, organizational,
          administrative, analytical, and problem solving skills. Articulate and
          refined communicator with operational command over English, Kurdish
          and Turkish language.
        </Text>
        <Button>
          <Link to="Contact" smooth={true}>
            HIRE ME
          </Link>
        </Button>
      </Fade>
    </Container>
  );
};

export default AboutMe;
