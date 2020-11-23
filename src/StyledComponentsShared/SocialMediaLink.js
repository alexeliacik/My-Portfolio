import styled from "styled-components";

const SocialMediaLink = styled.a`
  color: ${({ color }) => color};
  padding: 2px;

  svg {
    transition: all 0.2s;
    font-size: 2em;
    margin: 6px;
  }
  &:hover {
    svg {
      transform: scale(1.4);
    }
  }
`;

export default SocialMediaLink;
