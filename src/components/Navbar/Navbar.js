import React from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from "../../assets/images/favicon.ico";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialMediaLink from "../../StyledComponents/SocialMediaLink";
import { useSelector } from "react-redux";

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 23%;
  background: blue;
  min-height: 100vh;
  padding: 20px 30px;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 1001;
  color: rgb(136, 136, 136);
  background: #fff;
  transition: 0.5s;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  transform: ${({ showNavbar }) =>
    showNavbar ? "translateX(-100%)" : "translateX(0)"};

  @media (max-width: 1024px) {
    width: 270px;
    transform: ${({ showNavbar }) =>
      showNavbar ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const Logo = styled.div`
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1em;
  text-transform: uppercase;
  margin-bottom: 30px;
  width: 100%;

  a {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    letter-spacing: 3px;

    img {
      width: 100%;
      height: auto;
    }

    span {
      display: block;
      font-size: 16px;
      color: #888;
      font-weight: 400;
      font-family: "Oswald", sans-serif;
    }
  }
`;

const NavbarFooter = styled.div`
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  padding: 10px;

  p {
    margin-top: 10px;
    font-family: "Rambla", sans-serif;
    font-size: 13px;
  }
`;

const Navbar = () => {
  const showNavbar = useSelector((state) => state.showNavbar);
  return (
    <StyledNav showNavbar={showNavbar}>
      <Logo>
        <a href="http://alexeliacik.com/">
          <img src={logo} alt="logo" />
          <span>ALEX ELIACIK</span>
        </a>
      </Logo>
      <NavbarLinks
      //  closeNavbar={closeNavbar}
      />
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
        <p>© 2020 Alex Eliacik. All rights reserved.</p>
      </NavbarFooter>
    </StyledNav>
  );
};

export default Navbar;
