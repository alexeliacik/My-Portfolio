import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import MySkils from "./MySkils/MySkils";
import MyWebsites from "./MyWebsites/MyWebsites";
import CreativeWorks from "./CreativeWorks/CreativeWorks";
import MySongs from "./MySongs/MySongs";
import Footer from "./Footer/Footer";
import ContactMe from "./ContactMe/ContactMe";
import { closeNavbar } from "../../actions/";

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

const MainContent = () => {
  const showNavbar = useSelector((state) => state.showNavbar);
  const dispatch = useDispatch();
  const handleScroll = useCallback(() => dispatch(closeNavbar()), [dispatch]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <StyledMainContent
      showNavbar={showNavbar}
      onScroll={() => dispatch(closeNavbar())}
      onClick={() => dispatch(closeNavbar())}
    >
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
