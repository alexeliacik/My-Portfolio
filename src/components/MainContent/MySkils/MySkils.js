import React from "react";
import styled from "styled-components";
import { GrPersonalComputer, GrIteration } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import Container from "../../../StyledComponents/Container";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import TitleBig from "../../../StyledComponents/TitleBig";
import Fade from "react-reveal/Fade";

const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Rambla", sans-serif;
  margin-bottom: 30px;

  & > div {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const SkillsCard = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid #ececec;
  width: 100%;
  padding: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 20px 30px;
  }
`;

const SkillsCardIcon = styled.div`
  margin-bottom: 35px;

  svg {
    opacity: 0.6;
    width: 45px;
    height: 35px;
  }
`;

const SkillsCardText = styled.p`
  font-size: 15px;
  line-height: 1.75em;
  font-weight: 700;
  color: #888;
`;

const SkillsCardHeader = styled.h3`
  font-weight: 700;
  margin-bottom: 20px;

  color: #101010;
  font-size: 18px;
`;

const MySkills = () => {
  return (
    <Container id="My Skills" background="#f7f7f7">
      <TitleSmall>WHAT I DO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>MY SKILLS</TitleBig>
      </Fade>

      <Skills>
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
      </Skills>
    </Container>
  );
};

export default MySkills;
