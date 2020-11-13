import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Container from "../../../StyledComponents/Container";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import TitleBig from "../../../StyledComponents/TitleBig";
import Text from "../../../StyledComponents/Text";
import FlexboxContainerJCSB from "../../../StyledComponents/FlexboxContainerJCSB";
import Fade from "react-reveal/Fade";

const PortfolioCardTitle = styled.h2`
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

const PortfolioCard = styled.a`
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

    ${PortfolioCardTitle} {
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

const CreativeWorks = () => {
  const creativeWorks = useSelector(({ creativeWorks }) => creativeWorks);

  return (
    <Container background="#f7f7f7" id="Creative Works">
      <TitleSmall>PORTFOLIO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>CREATIVE WORKS</TitleBig>
      </Fade>
      <Text>
        Please feel free to read detailed README section for each project on
        GitHub and see my other repositories.
      </Text>
      <FlexboxContainerJCSB>
        {creativeWorks.map((creativeWork) => (
          <Fade
            key={creativeWork.name}
            left
            delay={creativeWork.id * 300}
            distance="60px"
          >
            <PortfolioCard
              href={creativeWork.url}
              backgroundImage={creativeWork.backgroundImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioCardTitle>{creativeWork.name}</PortfolioCardTitle>
              <PortfolioUsedTechnologies>
                Used Technologies
              </PortfolioUsedTechnologies>
              <PortfolioUsedTechnologiesText>
                {creativeWork.usedTechnologies}
              </PortfolioUsedTechnologiesText>
            </PortfolioCard>
          </Fade>
        ))}
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default CreativeWorks;
