import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "./actions/index";

import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import {
  StyledApp,
  GlobalStyle,
  NavbarToggleSpan,
  NavbarToggle,
} from "./StyledApp";

const App = () => {
  const showNavbar = useSelector((state) => state.showNavbar);
  const dispatch = useDispatch();

  return (
    <StyledApp>
      <GlobalStyle />

      <NavbarToggle
        onClick={() => dispatch(toggleNavbar())}
        showNavbar={showNavbar}
      >
        <NavbarToggleSpan></NavbarToggleSpan>
        <NavbarToggleSpan></NavbarToggleSpan>
        <NavbarToggleSpan></NavbarToggleSpan>
      </NavbarToggle>
      <Navbar />
      <MainContent />
    </StyledApp>
  );
};

export default App;
