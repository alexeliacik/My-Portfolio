import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialMediaLink from "../../../StyledComponents/SocialMediaLink";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background: #101010;
  color: #fff;
  height: 330px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 20px;
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
