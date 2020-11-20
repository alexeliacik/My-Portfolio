import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNavbar } from "../../actions/";
import { StyledMainContent } from "./StyledMainContent";

import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import MySkills from "./MySkills/MySkills";
import MyWebsites from "./MyWebsites/MyWebsites";
import CreativeWorks from "./CreativeWorks/CreativeWorks";
import MySongs from "./MySongs/MySongs";
import Footer from "./Footer/Footer";
import ContactMe from "./ContactMe/ContactMe";

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
      <MySkills />
      <MyWebsites />
      <CreativeWorks />
      <MySongs />
      <ContactMe />
      <Footer />
    </StyledMainContent>
  );
};

export default MainContent;
