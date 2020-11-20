import styled from "styled-components";

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

export { Iframe, IframeCard };
