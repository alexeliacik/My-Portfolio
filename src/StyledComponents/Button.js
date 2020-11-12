import styled from "styled-components";

const Button = styled.button`
  font-family: "Rambla", sans-serif;
  font-size: 16px;
  line-height: 1.75;
  font-weight: 400;
  color: #fff;
  background-color: rgba(16, 16, 16, 1);
  margin-top: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  border: none;
  padding: 7px 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(16, 16, 16, 0.8);
  }
`;

export default Button;
