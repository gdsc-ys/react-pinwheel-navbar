import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import PinwheelNavbar from 'react-pinwheel-navbar';
import PinwheelNavbar from "./pinwheel/PinwheelNavbar";
import { colors, texts } from "./pinwheel/value";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colorsValue = colors;
const textsValue = texts;

root.render(
  <React.StrictMode>
    <PinwheelNavbar
      colors={colorsValue}
      texts={textsValue}
      number={30}
      width={80}
      height={120}
    ></PinwheelNavbar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
