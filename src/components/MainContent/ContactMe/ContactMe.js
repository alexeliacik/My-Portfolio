import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import Container from "../../../StyledComponentsShared/Container";
import Button from "../../../StyledComponentsShared/Button";
import TitleSmall from "../../../StyledComponentsShared/TitleSmall";
import TitleBig from "../../../StyledComponentsShared/TitleBig";
import Text from "../../../StyledComponentsShared/Text";
import FlexboxContainerJCSB from "../../../StyledComponentsShared/FlexboxContainerJCSB";
import TextBold from "../../../StyledComponentsShared/TextBold";
import Fade from "react-reveal/Fade";

import {
  ContactFormBox,
  ContactForm,
  Input,
  Textarea,
  PopUp,
} from "./StyledContactMe";

const ContactMe = () => {
  const [showPopUp, setShowPopUp] = useState(null);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

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

  const verifyReCAPTCHA = (value) => {
    if (value) {
      setIsVerified(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length && message.length && email.length && isVerified) {
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
            setPopUpMessage("Something went wrong, please try again!");
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
            <TextBold>ALI ELIACIK</TextBold>
            <Text>I am willing to relocate on my own expenses, Thank you.</Text>
            <Text>ADDRESS: North York, Toronto, ON Canada</Text>
            <Text>EMAIL: ali.eliacik@hotmail.com</Text>
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
              <ReCAPTCHA
                sitekey="6LciueQZAAAAAFDghTOEMtbJYoRFcmyfAp_lA4hQ"
                onChange={verifyReCAPTCHA}
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
