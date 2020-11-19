import React from "react";
import styled, { keyframes } from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import headerBackgroundImage from "../../../assets/images/slider.jpg";
import alex from "../../../assets/images/alex.jpg";
import {
  AnimatedText1,
  AnimatedText2,
} from "../../../StyledComponents/AnimatedText";

const arrowAnimation = keyframes`
    0% {transform: translateY(0)}
    15% { transform: translateY(-75%)}
    23% { transform: translateY(-75%)}
    30% { transform: translateY(0)}
    38% { transform: translateY(-37%)}
    44% { transform: translateY(-37%)}
    54% { transform: translateY(0)}
    61% { transform: translateY(-7.5%)}
    68% { transform: translateY(-7.5%)}
    73% { transform: translateY(0)}
    100% { transform: translateY(0)}
`;

const headerContentAnimation = keyframes`
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translate(0)}
`;

const StyledHeader = styled.header`
  min-height: 95vh;
  background-image: url(${headerBackgroundImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90%;
    color: #fff;
    animation: ${headerContentAnimation} 1s;

    .image_wrap {
      width: 180px;
      height: 180px;
      margin-bottom: 0;
      background-image: url(${alex});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 120%;
      border-radius: 50%;
      border: 5px solid #888;
    }

    h1 {
      font-size: 40px;
      font-family: "Oswald", sans-serif;
      font-weight: 500;
      margin: 0;
      letter-spacing: 0px;
      line-height: normal;
      margin-top: 20px;
    }

    h2 {
      margin-top: 8px;
      font-family: "Rambla", sans-serif;
      font-size: 25px;
      display: flex;
      justify-content: center;
    }
  }

  svg {
    color: #fff;
    width: 90px;
    height: 90px;
    transition: all 0.2s;
    animation: ${arrowAnimation} 2.5s infinite ease-out;
    cursor: pointer;
    padding: 30px;

    &:hover {
      color: rgb(136, 136, 136);
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader id="Home">
      <div className="desc">
        <div className="image_wrap"></div>
        <h1>ALEX ELIACIK</h1>
        <h2 className="cd-headline clip">
          <span>I'm </span>
          <AnimatedText1>Front End Developer</AnimatedText1>
          <AnimatedText2>UX/UI Developer</AnimatedText2>
        </h2>
      </div>
      <Link to="About Me" smooth={true} duration={1000}>
        <FaAngleDoubleDown />
      </Link>
    </StyledHeader>
  );
};

export default Header;
