import React from "react";
import { Link } from "react-scroll";
import { FaAngleDoubleDown } from "react-icons/fa";
import {
  AnimatedText1,
  AnimatedText2,
} from "../../../StyledComponentsShared/AnimatedText";
import {
  StyledHeader,
  HeaderImage,
  HeaderContainer,
  HeaderTextName,
  AnimatedTextContainer,
  DownArow,
} from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader id="Home">
      <HeaderContainer>
        <HeaderImage></HeaderImage>
        <HeaderTextName>ALI ELIACIK</HeaderTextName>
        <AnimatedTextContainer>
          I'm
          <AnimatedText1>Front-End Developer</AnimatedText1>
          <AnimatedText2>UX/UI Developer</AnimatedText2>
        </AnimatedTextContainer>
      </HeaderContainer>
      <Link to="About Me" smooth={true} duration={1000}>
        <DownArow>
          <FaAngleDoubleDown />
        </DownArow>
      </Link>
    </StyledHeader>
  );
};

export default Header;
