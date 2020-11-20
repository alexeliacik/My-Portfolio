import styled from "styled-components";

const SkillsCardWrapper = styled.div`
  font-family: "Rambla", sans-serif;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  & > div {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const SkillsCard = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid #ececec;
  width: 100%;
  padding: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 20px 30px;
  }
`;

const SkillsCardIcon = styled.div`
  margin-bottom: 35px;

  svg {
    opacity: 0.6;
    width: 45px;
    height: 35px;
  }
`;

const SkillsCardText = styled.p`
  font-size: 15px;
  line-height: 1.75em;
  font-weight: 700;
  color: #888;
`;

const SkillsCardHeader = styled.h3`
  font-weight: 700;
  margin-bottom: 20px;

  color: #101010;
  font-size: 18px;
`;

export {
  SkillsCardWrapper,
  SkillsCard,
  SkillsCardIcon,
  SkillsCardText,
  SkillsCardHeader,
};
