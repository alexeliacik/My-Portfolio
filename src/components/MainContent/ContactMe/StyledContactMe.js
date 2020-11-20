import styled, { keyframes } from "styled-components";

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
  border-bottom: 2px solid #ececec;
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
    border-bottom: 2px solid #101010;

    &::placeholder {
      color: #101010;
    }
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
    border-bottom: 2px solid #101010;

    &::placeholder {
      color: #101010;
    }
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

export { ContactFormBox, ContactForm, Input, Textarea, PopUp };
