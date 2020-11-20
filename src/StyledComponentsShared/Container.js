import styled from "styled-components";

const Container = styled.div`
  padding: 80px 30px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom && paddingBottom};
  background-color: ${({ background }) => background};

  @media (max-width: 1024px) {
    padding: 100px 20px;
  }
`;

export default Container;
