import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import AppHooks from "./App.hooks";
import AppClass from "./App.class";

const App = process.env.REACT_APP_HOOKS === "1" ? AppHooks : AppClass;

ReactDOM.render(<App />, document.getElementById("root"));
