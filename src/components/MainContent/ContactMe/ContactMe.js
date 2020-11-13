import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
  position: relative;

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

const animatePopUp = keyframes`
  from{opacity:0; transform: scale(0.9) translateY(1rem)}
  to{opacity:1; transform: translateY(0)}
`;

const PopUp = styled.div`
  position: absolute;
  bottom: -6%;
  right: 22%;
  background-color: rgba(16, 16, 16, 1);
  color: #888;
  padding: 30px;
  border-radius: 3px;
  z-index: 60;
  animation: ${animatePopUp} 0.5s;
  animation-fill-mode: forwards;
`;
const ContactMe = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showPopUp]);
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
          if (result.text === "OK") {
            setMessage("Message has been sent succesfully!");
            setShowPopUp(true);
          }
        },
        (error) => {
          setShowPopUp(true);
          setMessage("Something went Wrong!");
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
              <PopUp>{message}</PopUp>
            </ContactForm>
          </Fade>
        </ContactFormBox>
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default ContactMe;
