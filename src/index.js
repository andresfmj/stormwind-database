import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import "./styles/styles.styl";

hydrate(<App />, document.getElementById("app"));