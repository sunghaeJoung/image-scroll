import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Redux/rootReducer";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "pages/Main";

const GlobalStyle = createGlobalStyle`

  ${reset}
  * {
    box-sizing: border-box ;
    cursor: default;
  }

  body {
  width: 100vw;
  height: 100vh;
  }

  a {
    text-decoration: none;
    color: #000000
  }

  input {
    border: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <GlobalStyle />
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
