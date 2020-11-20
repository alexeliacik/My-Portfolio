import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNavbar } from "../../../actions";
import { Link } from "react-scroll";
import { Ul, Li } from "../StyledNavbar";

const NavbarLinks = () => {
  const navbarLinks = useSelector((state) => state.store.navbarLinks);
  const dispatch = useDispatch();

  const links = navbarLinks.map((link) => (
    <Link
      onClick={() => dispatch(closeNavbar())}
      key={link.name}
      activeClass="active"
      spy={true}
      to={link.name}
      smooth={true}
      duration={1000}
    >
      <Li>{link.name}</Li>
    </Link>
  ));

  return <Ul>{links}</Ul>;
};

export default NavbarLinks;
