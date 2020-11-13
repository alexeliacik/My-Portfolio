import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialMediaLink from "../../../StyledComponents/SocialMediaLink";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  background: #101010;
  color: #fff;
`;

const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 400px;
  text-align: center;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterCard>Alex Eliacik</FooterCard>
      <FooterCard>© 2020 Alex Eliacik. All rights reserved.</FooterCard>
      <FooterCard>
        <SocialMediaLink
          color="#fff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/alex-eliacik-929990197/"
        >
          <FaLinkedin />
        </SocialMediaLink>
        <SocialMediaLink
          color="#fff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexeliacik"
        >
          <FaGithub />
        </SocialMediaLink>
      </FooterCard>
    </StyledFooter>
  );
};

export default Footer;
