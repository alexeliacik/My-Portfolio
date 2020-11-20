import React from "react";
import { useSelector } from "react-redux";

import Container from "../../../StyledComponentsShared/Container";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import FlexboxContainerJCSB from "../../../StyledComponentsShared/FlexboxContainerJCSB";
import TitleBig from "../../../StyledComponentsShared/TitleBig";
import Fade from "react-reveal/Fade";

import { Iframe, IframeCard } from "./StyledMySongs";

const MySongs = () => {
  const mySongs = useSelector((state) => state.store.mySongs);

  const mysongs = mySongs.map((song) => (
    <Fade key={song.id} left delay={song.id * 500} distance="60px">
      <FlexboxContainerJCSB>
        <IframeCard>
          <Iframe
            src={song.url}
            title={song.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></Iframe>
        </IframeCard>
      </FlexboxContainerJCSB>
    </Fade>
  ));

  return (
    <Container background="#fff" id="My Songs">
      <TitleSmall>LISTEN</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>MY SONGS</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>{mysongs}</FlexboxContainerJCSB>
    </Container>
  );
};

export default MySongs;
