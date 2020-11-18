import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Container from "../../../StyledComponents/Container";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import FlexboxContainerJCSB from "../../../StyledComponents/FlexboxContainerJCSB";
import TitleBig from "../../../StyledComponents/TitleBig";
import Fade from "react-reveal/Fade";

const Iframe = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
`;

const IframeCard = styled.a`
  display: inline-block;
  width: calc(22vw);

  @media (max-width: 1024px) {
    width: calc(28vw);
  }

  @media (max-width: 768px) {
    width: calc(91vw);
  }
`;

const MySongs = () => {
  const mySongs = useSelector(({ mySongs }) => mySongs);

  return (
    <Container background="#fff" id="My Songs">
      <TitleSmall>LISTEN</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>MY SONGS</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>
        {mySongs.map((song) => (
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
        ))}
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default MySongs;
