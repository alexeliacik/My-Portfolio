import styled, { keyframes } from "styled-components";
import headerBackgroundImage from "../../../assets/images/slider.jpg";
import alex from "../../../assets/images/alex.jpg";

const arrowAnimation = keyframes`
0% {transform: translateY(0)}
15% { transform: translateY(-75px)}
23% { transform: translateY(-75px)}
30% { transform: translateY(0)}
38% { transform: translateY(-37px)}
44% { transform: translateY(-37px)}
54% { transform: translateY(0)}
61% { transform: translateY(-7.5px)}
68% { transform: translateY(-7.5px)}
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
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90%;
  color: #fff;
  animation: ${headerContentAnimation} 1s;
  animation-delay: 1.3s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const HeaderImage = styled.div`
  width: 180px;
  height: 180px;
  background-image: url(${alex});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  border-radius: 50%;
  border: 5px solid #888;
`;

const HeaderTextName = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: normal;
  margin-top: 20px;
`;

const AnimatedTextContainer = styled.h2`
  margin-top: 8px;
  font-family: "Rambla", sans-serif;
  font-size: 25px;
  display: flex;
  justify-content: center;
`;

const DownArow = styled.div`
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
export {
  StyledHeader,
  HeaderImage,
  HeaderContainer,
  HeaderTextName,
  AnimatedTextContainer,
  DownArow,
};
