import styled from "styled-components";

const FlexboxContainerJCSB = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default FlexboxContainerJCSB;
