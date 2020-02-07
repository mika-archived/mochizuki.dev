import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100vh;
  margin: 0;
}

.rendering {
  animation: fadeIn 1s; 
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`;

const App: React.FC = () => {
  return (
    <div className="rendering">
      <div>Hello, World</div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.querySelector("#app")
);
