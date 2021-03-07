import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/Index.scss";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
