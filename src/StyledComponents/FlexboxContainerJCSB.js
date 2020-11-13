import styled from "styled-components";

const FlexboxContainerJCSB = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default FlexboxContainerJCSB;
