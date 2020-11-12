import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Container from "../../../StyledComponents/Container";
import Button from "../../../StyledComponents/Button";
import TitleSmall from "../../../StyledComponents/TitleSmall";
import TitleBig from "../../../StyledComponents/TitleBig";
import Text from "../../../StyledComponents/Text";
import FlexboxContainerJCSB from "../../../StyledComponents/FlexboxContainerJCSB";
import TextBold from "../../../StyledComponents/TextBold";
import Fade from "react-reveal/Fade";

const ContactFormBox = styled.div`
  width: 49%;
`;

const ContactForm = styled.form`
  & > *:not(button) {
    margin-bottom: 15px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ececec;
    padding: 18px 0px 10px;
    font-size: 15px;
    font-weight: 400;
    color: #101010;
    transition: all 0.1s;

    &::placeholder {
      transition: all 0.2s;
      color: #888;
      font-family: "Rambla", sans-serif;
      font-size: 15px;
    }

    &:focus {
      outline: none;
      transform: translateY(-1px);
      border-bottom: 2px solid #101010;
    }
  }
`;

const Input = styled.input`
  width: 50%;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  &:focus {
    outline: none;
    transform: translateY(-1px);
    border-bottom: 2px solid #101010;
  }
`;

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "274628",
        "template_67k3eqq",
        e.target,
        "user_WQiWaS2AssfIscEpN4Fji"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container background="#f7f7f7" id="Contact" paddingBottom="250px;">
      <TitleSmall>LOCATION</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>CONTACT ME</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>
        <ContactFormBox>
          <Fade left delay={300} distance="60px">
            <TextBold>ALEX ELIACIK</TextBold>
            <Text>I am willing to relocate on my own expenses, Thank you.</Text>
            <Text>PHONE: +1 416 388 50 46</Text>
            <Text>EMAIL: alexeliacik@gmail.com</Text>
            <Text>ADDRESS: North York, Toronto, ON Canada</Text>
          </Fade>
        </ContactFormBox>

        <ContactFormBox>
          <Fade left delay={600} distance="60px">
            <TextBold>GET IN TOUCH</TextBold>
            <ContactForm onSubmit={sendEmail}>
              <Input placeholder="Name" type="text" name="name" />
              <Input placeholder="Email" type="email" name="email" />
              <Textarea placeholder="Message" name="message" />
              <Button type="submit" value="Send">
                Say Hello!
              </Button>
            </ContactForm>
          </Fade>
        </ContactFormBox>
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default ContactMe;
