import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import MySkils from "./MySkils/MySkils";
import MyWebsites from "./MyWebsites/MyWebsites";
import CreativeWorks from "./CreativeWorks/CreativeWorks";
import MySongs from "./MySongs/MySongs";
import Footer from "./Footer/Footer";
import ContactMe from "./ContactMe/ContactMe";

const StyledMainContent = styled.main`
  position: relative;
  min-height: 100vh;
  width: 77%;
  transform: ${({ showNavbar }) =>
    showNavbar ? "translateX(270px)" : "translateX(0)"};
  transition: all 0.5s;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MainContent = ({ showNavbar, closeMenu }) => {
  const handleScroll = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <StyledMainContent showNavbar={showNavbar} onScroll={handleScroll}>
      <Header />
      <AboutMe />
      <MySkils />
      <MyWebsites />
      <CreativeWorks />
      <MySongs />
      <ContactMe />
      <Footer />
    </StyledMainContent>
  );
};

export default MainContent;
