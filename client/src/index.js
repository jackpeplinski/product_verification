import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Checkmark from "./Components/Checkmark";
import Page from "./Components/Page";
import Wrapper from "./Components/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper>
      <Page />
    </Wrapper>
  </React.StrictMode>
);
