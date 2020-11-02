import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {

  
  margin:0;
  padding:0;
  }
  
  *,*::before, *::after {
    box-sizing: inherit
  }

  html {
    font-size: 63.5%;
    box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background: red;
  margin: 0;
`;

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      Hello World
    </StyledApp>
  );
};

export default App;
