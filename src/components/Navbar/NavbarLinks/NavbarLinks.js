import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-scroll";

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

const NavbarLinks = ({ closeMenu }) => {
  const navbarLinks = useSelector(({ navbarLinks }) => navbarLinks);
  return (
    <>
      <Ul>
        {navbarLinks.map((link) => (
          <Link
            onClick={closeMenu}
            key={link.name}
            activeClass="active"
            spy={true}
            to={link.name}
            smooth={true}
            duration={1000}
          >
            <Li>{link.name}</Li>
          </Link>
        ))}
      </Ul>
    </>
  );
};

export default NavbarLinks;
