import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 23%;
  background: blue;
  min-height: 100vh;
  padding: 20px 30px;
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
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 1em;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const LogoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  letter-spacing: 3px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const LogoText = styled.p`
  font-size: 16px;
  color: #888;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
`;

const NavbarFooter = styled.div`
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  padding: 10px;
`;

const NavbarFooterText = styled.p`
  font-family: "Rambla", sans-serif;
  margin-top: 10px;
  font-size: 13px;
`;

const Ul = styled.ul`
  a.active li {
    font-weight: 700;
    color: rgb(63, 63, 63);
  }
`;

const Li = styled.li`
  margin: 15px 0;
  padding-bottom: 10px;
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75em;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid rgba(236, 236, 236);
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    color: rgb(63, 63, 63);
    font-weight: 700;
  }
`;

export {
  StyledNav,
  Logo,
  NavbarFooter,
  LogoText,
  LogoImage,
  LogoLink,
  NavbarFooterText,
  Ul,
  Li,
};
