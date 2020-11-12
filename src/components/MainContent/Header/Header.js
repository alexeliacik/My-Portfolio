import React from "react";
import styled, { keyframes } from "styled-components";
import Typical from "react-typical";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import headerBackgroundImage from "../../../assets/images/slider.jpg";
import alex from "../../../assets/images/alex.jpg";

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

const StyledHeader = styled.header`
  min-height: 100vh;
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
    color: #fff;

    .image_wrap {
      width: 200px;
      height: 200px;
      display: inline-block;
      margin-bottom: 0;

      img {
        width: 100%;
        border-radius: 50%;
        border: 8px solid rgba(0, 0, 0, 0.1);
      }
    }

    h1 {
      font-size: 45px;
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
        <div className="image_wrap">
          <img src={alex} alt="alex" />
        </div>
        <h1>ALEX ELIACIK</h1>
        <h2 className="cd-headline clip">
          <span>I'm </span>
          <Typical
            style={{ display: "inline" }}
            steps={["Front-End Developer", 1300, "UX/UI Developer", 1300]}
            loop={Infinity}
            wrapper="span"
          />
        </h2>
      </div>
      <Link to="About Me" smooth={true} duration={1000}>
        <FaAngleDoubleDown />
      </Link>
    </StyledHeader>
  );
};

export default Header;
