import React from "react";
import styled from "styled-components";
import { GrPersonalComputer, GrIteration } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import Container from "../../../StyledComponents/Container";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import TitleBig from "../../../StyledComponents/TitleBig";
import Fade from "react-reveal/Fade";

const StyledMySkills = styled.div`
  .skills {
    display: flex;
    justify-content: space-between;
    font-family: "Rambla", sans-serif;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .skillCard {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      border: 1px solid #ececec;
      width: 100%;
      padding: 30px;

      .skillCardIcon {
        margin-bottom: 35px;

        svg {
          opacity: 0.6;
          width: 45px;
          height: 35px;
        }
      }

      .skillCardHeader {
        font-weight: 700;
        margin-bottom: 10px;

        color: #101010;
        font-size: 18px;
      }

      .skillCardText {
        font-size: 15px;
        line-height: 1.75em;
        font-weight: 700;
        color: #888;
        margin: 0 20px;
      }
    }

    @media (max-width: 768px) {
      width: calc(91vw);
      height: calc(79vw);
    }
  }
`;

const MySkills = () => {
  return (
    <StyledMySkills>
      <Container id="My Skills" background="#f7f7f7">
        <TitleSmall>WHAT I DO</TitleSmall>
        <Fade left distance="60px">
          <TitleBig>MY SKILLS</TitleBig>
        </Fade>

        <div className="skills">
          <Fade left delay={300} distance="60px">
            <div className="skillCard">
              <div className="skillCardIcon">
                <GrPersonalComputer />
              </div>
              <h3 className="skillCardHeader">Web Technologies</h3>
              <p className="skillCardText">
                React JS (Hooks, Redux, Router), React Native, HTML5, CSS3
                (Flexbox, Grid CSS) JQuery, Firebase
              </p>
            </div>
          </Fade>
          <Fade left delay={600} distance="60px">
            <div className="skillCard">
              <div className="skillCardIcon">
                <GoLightBulb />
              </div>
              <h3 className="skillCardHeader">Tools</h3>
              <p className="skillCardText">
                Styled Components, Material UI React Reveal, React Bootsrap 4
                React Transition Group
              </p>
            </div>
          </Fade>
          <Fade left delay={900} distance="60px">
            <div className="skillCard">
              <div className="skillCardIcon">
                <GrIteration />
              </div>
              <h3 className="skillCardHeader">Other</h3>
              <p className="skillCardText">Figma, GitHub, Netlify, Sass</p>
            </div>
          </Fade>
        </div>
      </Container>
    </StyledMySkills>
  );
};

export default MySkills;
