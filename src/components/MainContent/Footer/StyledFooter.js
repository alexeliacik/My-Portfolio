import styled from "styled-components";

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

export { StyledFooter, FooterCard };
