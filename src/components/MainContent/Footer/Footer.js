import React from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import SocialMediaLink from "../../../StyledComponentsShared/SocialMediaLink";

import { StyledFooter, FooterCard } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterCard>Ali Eliacik</FooterCard>
      <FooterCard>© 2020 Ali Eliacik. All rights reserved.</FooterCard>
      <FooterCard>
        <SocialMediaLink
          color="#fff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ali-eliacik-929990197/"
        >
          <FaLinkedin />
        </SocialMediaLink>
        <SocialMediaLink
          color="#fff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alieliacik"
        >
          <FaGithub />
        </SocialMediaLink>
        <SocialMediaLink
          color="#fff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://alieliacik.medium.com/"
        >
          <FaMedium />
        </SocialMediaLink>
      </FooterCard>
    </StyledFooter>
  );
};

export default Footer;
