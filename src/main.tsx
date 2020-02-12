import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import RootPage from "./components/pages/Root";

const GlobalStyle = createGlobalStyle`
html, body {
  min-height: 100vh;
  margin: 0;
  font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
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

.contrib-legend {
  /* Workaround for broken layout of github-calendar */
  padding: 0 14px 9px 0 !important;
}
`;

const App: React.FC = () => {
  return (
    <div className="rendering">
      <RootPage />
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
