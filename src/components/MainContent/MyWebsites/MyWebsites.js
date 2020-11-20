import React from "react";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Container from "../../../StyledComponentsShared/Container";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import PortfolioUsedTechnologies from "../../../StyledComponentsShared/PortfolioUsedTechnologies";
import PortfolioUsedTechnologiesContent from "../../../StyledComponentsShared/PortfolioUsedTechnologiesContent";
import FlexboxContainerJCSB from "../../../StyledComponentsShared/FlexboxContainerJCSB";
import TitleBig from "../../../StyledComponentsShared/TitleBig";

import { Card, CardTitle } from "./StyledMyWebsites";

const MyWebsites = () => {
  const myWebsites = useSelector(({ store }) => store.myWebsites);

  const websites = myWebsites.map((website) => (
    <Fade key={website.name} left delay={website.id * 300} distance="60px">
      <Card
        href={website.url}
        backgroundImage={website.backgroundImage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardTitle>{website.name}</CardTitle>
        <PortfolioUsedTechnologies>Used Technologies</PortfolioUsedTechnologies>
        <PortfolioUsedTechnologiesContent>
          {website.usedTechnologies}
        </PortfolioUsedTechnologiesContent>
      </Card>
    </Fade>
  ));

  return (
    <Container background="#fff" id="My Websites">
      <TitleSmall>PORTFOLIO</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>WEBSITES</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>{websites}</FlexboxContainerJCSB>
    </Container>
  );
};

export default MyWebsites;
