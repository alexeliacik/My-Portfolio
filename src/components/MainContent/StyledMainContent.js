import styled from "styled-components";

const StyledMainContent = styled.main`
  position: relative;
  width: 77%;
  transform: ${({ showNavbar }) =>
    showNavbar ? "translateX(270px)" : "translateX(0)"};
  transition: all 0.5s;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export { StyledMainContent };
