import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/styles.scss";

var mount = document.getElementById("app");
render(<App />, mount);