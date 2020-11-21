import React from "react";
import { useSelector } from "react-redux";

import logo from "../../assets/images/favicon.ico";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import SocialMediaLink from "../../StyledComponentsShared/SocialMediaLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  StyledNav,
  Logo,
  NavbarFooter,
  LogoText,
  LogoImage,
  LogoLink,
  NavbarFooterText,
} from "./StyledNavbar";
//
const Navbar = () => {
  const showNavbar = useSelector((state) => state.showNavbar);

  return (
    <StyledNav showNavbar={showNavbar}>
      <Logo>
        <LogoLink href="http://alexeliacik.com/">
          <LogoImage src={logo} alt="logo" />
          <LogoText>ALEX ELIACIK</LogoText>
        </LogoLink>
      </Logo>
      <NavbarLinks />
      <NavbarFooter>
        <SocialMediaLink
          color="#101010"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/alex-eliacik-929990197/"
        >
          <FaLinkedin />
        </SocialMediaLink>
        <SocialMediaLink
          color="#101010"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexeliacik"
        >
          <FaGithub />
        </SocialMediaLink>
        <NavbarFooterText>
          © 2020 Alex Eliacik. All rights reserved.
        </NavbarFooterText>
      </NavbarFooter>
    </StyledNav>
  );
};

export default Navbar;
