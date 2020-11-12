import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import { CSSTransition } from "react-transition-group";

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
    }
  
  *,*::before, *::after {
    box-sizing: inherit
  }

  html {
    font-family: 'Oswald', sans-serif;
    font-size: 63.5%;
    box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  overflow: hidden;
  font-size: 2rem;

  .navbarToggleTransition-enter {
    transform: translateX(0);
  }
  .navbarToggleTransition-enter-done {
    transform: translateX(270px);
    transition: all 0.3s;
  }
  .navbarToggleTransition-exit {
    transform: translateX(270px);
    transition: all 0.3s;
  }
  .navbarToggleTransition-exit-done {
    transform: translateX(0);

    transition: all 0.3s;
  }
`;
const NavbarToggleSpan = styled.span`
  position: relative;
  height: 3px;
  width: 25px;
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.1s;
`;

const NavbarToggle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 15px;
  left: 20px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #101010;
  border-radius: 50%;
  box-shadow: 0 3px 6px #a3a2a7;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 30;

  ${NavbarToggleSpan}:nth-child(1) {
    transform: ${({ showNavbar }) =>
      showNavbar ? "translateY(3px) rotate(45deg)" : "translateY(-4px)"};
  }

  ${NavbarToggleSpan}:nth-child(2) {
    transition: transform 0.2s opacity 0.4s;
    opacity: ${({ showNavbar }) => (showNavbar ? "0" : "1")};
    transform: ${({ showNavbar }) =>
      showNavbar ? "translateX(15px)" : "translateX(0)"};
  }

  ${NavbarToggleSpan}:nth-child(3) {
    transform: ${({ showNavbar }) =>
      showNavbar ? "translateY(-3px) rotate(-45deg)" : "translateY(4px)"};
  }

  &:hover {
    ${NavbarToggleSpan} {
      opacity: 0.9;
    }

    ${NavbarToggleSpan}:nth-child(1) {
      transform: ${({ showNavbar }) => !showNavbar && "translateY(-5.5px)"};
    }

    ${NavbarToggleSpan}:nth-child(2) {
      opacity: ${({ showNavbar }) => (showNavbar ? "0" : "0.9")};
    }

    ${NavbarToggleSpan}:nth-child(3) {
      transform: ${({ showNavbar }) => !showNavbar && "translateY(5.5px)"};
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowNavbar(false);
  };

  return (
    <StyledApp>
      <GlobalStyle />

      <CSSTransition
        in={showNavbar}
        timeout={80}
        classNames="navbarToggleTransition"
      >
        <NavbarToggle onClick={toggleMenu} showNavbar={showNavbar}>
          <NavbarToggleSpan></NavbarToggleSpan>
          <NavbarToggleSpan></NavbarToggleSpan>
          <NavbarToggleSpan></NavbarToggleSpan>
        </NavbarToggle>
      </CSSTransition>

      <Navbar
        showNavbar={showNavbar}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <MainContent
        showNavbar={showNavbar}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
    </StyledApp>
  );
};

export default App;
