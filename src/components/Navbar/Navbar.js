import React from "react";
import { useSelector } from "react-redux";

import logo from "../../assets/images/favicon.ico";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import SocialMediaLink from "../../StyledComponentsShared/SocialMediaLink";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

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
        <LogoLink href="http://alieliacik.com/">
          <LogoImage src={logo} alt="logo" />
          <LogoText>ALI ELIACIK</LogoText>
        </LogoLink>
      </Logo>
      <NavbarLinks />
      <NavbarFooter>
        <SocialMediaLink
          color="#101010"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ali-eliacik-929990197/"
        >
          <FaLinkedin />
        </SocialMediaLink>
        <SocialMediaLink
          color="#101010"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alieliacik"
        >
          <FaGithub />
        </SocialMediaLink>
        <SocialMediaLink
          color="#101010"
          target="_blank"
          rel="noopener noreferrer"
          href="https://alieliacik.medium.com/"
        >
          <FaMedium />
        </SocialMediaLink>
        <NavbarFooterText>
          © 2020 Ali Eliacik. All rights reserved.
        </NavbarFooterText>
      </NavbarFooter>
    </StyledNav>
  );
};

export default Navbar;
