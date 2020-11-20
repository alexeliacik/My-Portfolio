import styled, { keyframes } from "styled-components";

const textAnimation1 = keyframes`
  0% {width: 0.001px;border: transparent }
  5% {width: 0.001px; border: transparent}
  20% {width: 230px; border-right: 4px solid #fff}
  25% {width: 230px; border-right: transparent}
  30% {width: 230px; border-right: 4px solid #fff}
  35% {width: 230px; border-right: transparent}
  40% {width: 230px; border-right: 4px solid #fff}
  50% {width: 0.001px; border-right: 4px solid #fff}
  50.1% {width: 0.001px; border-right: transparent}
  100% {width: 0.001px; border: transparent;}
`;

export const AnimatedText1 = styled.span`
  display: inline-block;
  animation: ${textAnimation1} 6s linear infinite;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  border-color: transparent;
`;

export const textAnimation2 = keyframes`
  0% {width: 0.001px; border: transparent;}
  50% {width: 0.001px; border: transparent;}
  50.1% {width: 0.001px; border-right: 4px solid #fff}
  55% {width: 0.001px; border-right: 4px solid #fff}
  65% {width: 180px; border-right: 4px solid #fff} 
  70% {width: 180px; border-right: transparent}
  75% {width: 180px; border-right: 4px solid #fff}
  80% {width: 180px; border-right: transparent}
  85% {width: 180px; border-right: 4px solid #fff}
  90% {width: 180px; border-right: 4px solid #fff}
  100% {width: 0.001px; border-right: 4px solid #fff}
`;

export const AnimatedText2 = styled.span`
  height: 30px;
  display: inline-block;
  animation: ${textAnimation2} 6s linear infinite;
  overflow: hidden;
  white-space: nowrap;
`;
