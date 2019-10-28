import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100vh;
  margin: 0;
}

#loading {
  height: 100vh;
  min-height: 100vh;
  color: #fff;
  background-color: #333;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
  </React.StrictMode>,
  document.querySelector("#app")
);
