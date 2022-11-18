# react-pinwheel-navbar

PinwheelNavbar is pinwheel shaped navigation, JavaScript React component.

**Note:**
PinwheelNavbar try to solve z-index paradox.
https://stackoverflow.com/questions/22352649/css-z-index-paradox-flower
But I just covering the problem part with trick, you can't put animation to elements. Though I hope you enjoy it.

## Install

```
npm install react-pinwheel-navbar
```

## Usage

```js
import React from "react";
import PinwheelNavbar from "react-pinwheel-navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colors = ["#a83332", "#5f308c"];

const texts = ["#a83332", "#ce5c32", "#c88235"];

const links = [
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
];

const onClicks = [
  function () {
    console.log("1");
  },
  function () {
    console.log("2");
  },
  function () {
    console.log("3");
  },
  function () {
    console.log("4");
  },
  function () {
    console.log("5");
  },
  function () {
    console.log("6");
  },
  function () {
    console.log("7");
  },
  function () {
    console.log("8");
  },
  function () {
    console.log("9");
  },
  function () {
    console.log("10");
  },
];

root.render(
  <React.StrictMode>
    <PinwheelNavbar
      colors={colors}
      texts={texts}
      number={9}
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
```

### Props

```js
  number: PropTypes__default["default"].number.isRequired,

  colors: PropTypes__default["default"].array.isRequired,
  texts: PropTypes__default["default"].array.isRequired,
  links: PropTypes__default["default"].array,
  onClicks: PropTypes__default["default"].array,

  width: PropTypes__default["default"].number.isRequired,
  height: PropTypes__default["default"].number.isRequired,

  border: PropTypes__default["default"].string,
  borderRadius: PropTypes__default["default"].string,
  textColor: PropTypes__default["default"].string,
  fontWeight: PropTypes__default["default"].string,
  fontFamily: PropTypes__default["default"].string,
  boxShadow: PropTypes__default["default"].string
```

**number(Required)**<br/>
Number of card.<br/><br/>

**colors(Required)**<br/>
Array of background-color of each card.<br/>
If length of colors less than number, stretching array with gradient-color library.<br/><br/>

**texts(Required)**<br/>
Array of text of each card.<br/>
If length of texts shorter than number, spare cards will empty.<br/><br/>

**links**<br/>
Array of links of each card.<br/>
If length of links shorter than number, spare cards will empty.<br/><br/>

**onClicks**<br/>
Array of onclick function of each card.<br/>
If length of onClicks shorter than number, spare cards will empty.<br/><br/>

**width(Required)**<br/>
Number of width, calculated in pixels.<br/><br/>

**height(Required)**<br/>
Number of height, calculated in pixels.<br/><br/>

**border**<br/>
border style string of card. Just type like other css.<br/>
Default is `"none"`.<br/><br/>

**borderRadius**<br/>
border-radius style string of card. Just type like other css.<br/>
Default is `"5px"`.<br/><br/>

**textColor**<br/>
color style string of card. Just type like other css.<br/>
Default is `"white"`.<br/><br/>

**fontWeight**<br/>
font-weight style string of card. Just type like other css.<br/>
Default is `"bold"`.<br/><br/>

**fontFamily**<br/>
font-family style string of card. Just type like other css.<br/>
Default is up to your browser.<br/><br/>

**boxShadow**<br/>
style string of card. Just type like other css.<br/>
Default is `"none"`.<br/><br/>

## Dependencies

gradient-color
