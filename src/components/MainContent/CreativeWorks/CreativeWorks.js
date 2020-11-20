import React from "react";
import { useSelector } from "react-redux";

import Container from "../../../StyledComponentsShared/Container";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import TitleBig from "../../../StyledComponentsShared/TitleBig";
import Text from "../../../StyledComponentsShared/Text";
import FlexboxContainerJCSB from "../../../StyledComponentsShared/FlexboxContainerJCSB";
import PortfolioUsedTechnologies from "../../../StyledComponentsShared/PortfolioUsedTechnologies";
import PortfolioUsedTechnologiesContent from "../../../StyledComponentsShared/PortfolioUsedTechnologiesContent";
import Fade from "react-reveal/Fade";

import { PortfolioCardTitle, PortfolioCard } from "./StyledCreativeWorks";

const CreativeWorks = () => {
  const creativeWorks = useSelector(({ store }) => store.creativeWorks);

  const creativeworks = creativeWorks.map((creativeWork) => (
    <Fade
      key={creativeWork.id}
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
        <PortfolioUsedTechnologies>Used Technologies</PortfolioUsedTechnologies>
        <PortfolioUsedTechnologiesContent>
          {creativeWork.usedTechnologies}
        </PortfolioUsedTechnologiesContent>
      </PortfolioCard>
    </Fade>
  ));

  return (
    <Container background="#f7f7f7" id="Creative Works">
      <TitleSmall>PORTFOLIO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>CREATIVE WORKS</TitleBig>
      </Fade>
      <Fade left distance="60px">
        <Text>
          Please feel free to read detailed README section for each project on
          GitHub and see my other repositories.
        </Text>
      </Fade>
      <FlexboxContainerJCSB>{creativeworks}</FlexboxContainerJCSB>
    </Container>
  );
};

export default CreativeWorks;
