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
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = styled.form`
  position: relative;
`;

const Input = styled.input`
  margin: 0 2% 15px 0;
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
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ececec;
  padding: 18px 0px 10px;
  font-size: 15px;
  font-weight: 400;
  color: #101010;
  transition: all 0.1s;
  resize: none;

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
  font-size: 16px;
  bottom: 3%;
  left: 30%;
  z-index: 60;
  animation: ${animatePopUp} 0.5s;
  animation-fill-mode: forwards;
`;

const ContactMe = () => {
  const [showPopUp, setShowPopUp] = useState(null);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showPopUp]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length && message.length && email.length) {
      setShowPopUp(true);
      setPopUpMessage("Message has been sent succesfully!");

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
              setPopUpMessage("Message has been sent succesfully!");
              setShowPopUp(true);
            }
          },
          (error) => {
            setPopUpMessage(true);
            setPopUpMessage("Something went Wrong!, please try again");
          }
        );

      setPopUpMessage("Message has been sent succesfully!");
    } else {
      setShowPopUp(true);
      setPopUpMessage("Please fill all  fields!");
    }
  };

  return (
    <Container background="#f7f7f7" id="Contact" paddingBottom="150px;">
      <TitleSmall>LOCATION</TitleSmall>
      <Fade left distance="60px">
        <TitleBig>CONTACT ME</TitleBig>
      </Fade>

      <FlexboxContainerJCSB>
        <ContactFormBox>
          <Fade left delay={300} distance="60px">
            <TextBold>ALEX ELIACIK</TextBold>
            <Text>I am willing to relocate on my own expenses, Thank you.</Text>
            <Text>ADDRESS: North York, Toronto, ON Canada</Text>
            <Text>EMAIL: alexeliacik@gmail.com</Text>
            <Text>PHONE: +1 416 388 50 46</Text>
          </Fade>
        </ContactFormBox>

        <ContactFormBox>
          <Fade left delay={600} distance="60px">
            <TextBold>GET IN TOUCH</TextBold>
            <ContactForm onSubmit={sendEmail}>
              <FlexboxContainerJCSB>
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={(e) => handleName(e)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={(e) => handleEmail(e)}
                />
              </FlexboxContainerJCSB>

              <Textarea
                placeholder="Message"
                name="message"
                onChange={(e) => handleMessage(e)}
              />
              <Button type="submit" value="Send">
                Say Hello!
              </Button>
              {showPopUp && <PopUp>{popUpMessage}</PopUp>}
            </ContactForm>
          </Fade>
        </ContactFormBox>
      </FlexboxContainerJCSB>
    </Container>
  );
};

export default ContactMe;
