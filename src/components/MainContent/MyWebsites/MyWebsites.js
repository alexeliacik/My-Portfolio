import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Container from "../../../StyledComponents/Container";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import FlexboxContainerJCSB from "../../../StyledComponents/FlexboxContainerJCSB";
import TitleBig from "../../../StyledComponents/TitleBig";
import Fade from "react-reveal/Fade";

const CardTitle = styled.h2`
  font-size: 18px;
  opacity: 0;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const PortfolioUsedTechnologies = styled.p`
  font-family: "Rambla", sans-serif;
  font-size: 15px;
  line-height: 1.75em;
  margin-bottom: 5px;
  color: white;
  font-weight: 200;
  border-bottom: 1px solid #fff;
  opacity: 0;
`;
const PortfolioUsedTechnologiesText = styled.p`
  color: #ccc;
  font-size: 14px;
  opacity: 0;
  margin-top: 10px;
`;

const Card = styled.a`
  display: inline-block;
  width: calc(22vw);
  height: calc(19vw);
  padding: 20px;

  background-image: ${(props) =>
    `linear-gradient(transparent, transparent), url(${process.env.PUBLIC_URL}/DynamicPortfolioImages/${props.backgroundImage}.jpg)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: center;
  text-decoration: none;
  box-shadow: 0 8px 8px rgb(162, 162, 162);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 4px rgb(162, 162, 162);
    transform: translateY(-10px);
    background-image: ${(props) =>
      `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${process.env.PUBLIC_URL}/DynamicPortfolioImages/${props.backgroundImage}.jpg)`};

    ${CardTitle} {
      opacity: 1;
      transform: translateY(10px);
      transition: all 0.3s;
    }

    ${PortfolioUsedTechnologies} {
      opacity: 1;
      transition: all 0.3s;
    }
    ${PortfolioUsedTechnologiesText} {
      opacity: 1;
      transform: translateY(-5px);
      transition: all 0.3s;
    }
  }

  @media (max-width: 1024px) {
    width: calc(28vw);
    height: calc(25vw);
  }

  @media (max-width: 768px) {
    width: calc(90vw);
    height: calc(79vw);
  }
`;

const MyWebsites = () => {
  const myWebsites = useSelector(({ myWebsites }) => myWebsites);

  return (
    <Container background="#fff" id="My Websites">
      <TitleSmall>PORTFOLIO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>WEBSITES</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>
        {myWebsites.map((website) => (
          <Fade
            key={website.name}
            left
            delay={website.id * 300}
            distance="60px"
          >
            <Card
              href={website.url}
              backgroundImage={website.backgroundImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardTitle>{website.name}</CardTitle>
              <PortfolioUsedTechnologies>
                Used Technologies
              </PortfolioUsedTechnologies>
              <PortfolioUsedTechnologiesText>
                {website.usedTechnologies}
              </PortfolioUsedTechnologiesText>
            </Card>
          </Fade>
        ))}
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default MyWebsites;
