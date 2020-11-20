import styled from "styled-components";
import PortfolioUsedTechnologies from "../../../StyledComponentsShared/PortfolioUsedTechnologies";
import PortfolioUsedTechnologiesContent from "../../../StyledComponentsShared/PortfolioUsedTechnologiesContent";

const CardTitle = styled.h2`
  font-size: 18px;
  opacity: 0;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
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
    ${PortfolioUsedTechnologiesContent} {
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
    width: calc(91vw);
    height: calc(79vw);
  }
`;

export { CardTitle, Card };
