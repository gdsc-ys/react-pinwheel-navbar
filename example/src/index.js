import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PinwheelNavbar from "react-pinwheel-navbar";
import { colors, texts, links, onClicks } from "./value";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PinwheelNavbar
      colors={colors}
      texts={texts}
      number={30}
      width={80}
      height={120}
      border={"1px solid black"}
      borderRadius={"5px"}
      textColor={"black"}
      fontWeight={"regular"}
      onClicks={onClicks}
      links={links}
    ></PinwheelNavbar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
