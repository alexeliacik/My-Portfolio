import React from "react";
import Container from "../../../StyledComponentsShared/Container";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import TitleBig from "../../../StyledComponentsShared/TitleBig";
import Fade from "react-reveal/Fade";
import { GrPersonalComputer, GrIteration } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";

import {
  SkillsCardWrapper,
  SkillsCard,
  SkillsCardIcon,
  SkillsCardText,
  SkillsCardHeader,
} from "./StyledMySkills";

const MySkills = () => {
  return (
    <Container id="My Skills" background="#f7f7f7">
      <TitleSmall>WHAT I DO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>MY SKILLS</TitleBig>
      </Fade>

      <SkillsCardWrapper>
        <Fade left delay={300} distance="60px">
          <SkillsCard>
            <SkillsCardIcon>
              <GrPersonalComputer />
            </SkillsCardIcon>
            <SkillsCardHeader>Web Technologies</SkillsCardHeader>
            <SkillsCardText>HTML5, CSS3 (Flexbox, Grid CSS)</SkillsCardText>
            <SkillsCardText>React JS (Hooks, Redux, Router)</SkillsCardText>
            <SkillsCardText>React Native</SkillsCardText>
            <SkillsCardText>JQuery</SkillsCardText>
            <SkillsCardText>Firebase</SkillsCardText>
          </SkillsCard>
        </Fade>
        <Fade left delay={600} distance="60px">
          <SkillsCard>
            <SkillsCardIcon>
              <GoLightBulb />
            </SkillsCardIcon>
            <SkillsCardHeader>Tools</SkillsCardHeader>
            <SkillsCardText>Styled Components</SkillsCardText>
            <SkillsCardText>React Transition Group</SkillsCardText>
            <SkillsCardText>Material UI </SkillsCardText>
            <SkillsCardText>React Reveal</SkillsCardText>
            <SkillsCardText>React Bootsrap 4</SkillsCardText>
          </SkillsCard>
        </Fade>
        <Fade left delay={900} distance="60px">
          <SkillsCard>
            <SkillsCardIcon>
              <GrIteration />
            </SkillsCardIcon>
            <SkillsCardHeader>Other</SkillsCardHeader>
            <SkillsCardText>Git</SkillsCardText>
            <SkillsCardText>Netlify</SkillsCardText>
            <SkillsCardText>Sass</SkillsCardText>
            <SkillsCardText>Figma</SkillsCardText>
          </SkillsCard>
        </Fade>
      </SkillsCardWrapper>
    </Container>
  );
};

export default MySkills;
