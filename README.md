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
];

root.render(
  <React.StrictMode>
    <PinwheelNavbar
      colors={colors}
      texts={texts}
      number={12}
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

**number(Required)**
Number of card.

**colors(Required)**
Array of background-color of each card.
If length of colors less than number, stretching array with gradient-color library.

**texts(Required)**
Array of text of each card.
If length of texts shorter than number, spare cards will empty.

**links**
Array of links of each card.
If length of links shorter than number, spare cards will empty.

**onClicks**
Array of onclick function of each card.
If length of onClicks shorter than number, spare cards will empty.

**width(Required)**
Number of width, calculated in pixels.

**height(Required)**
Number of height, calculated in pixels.

**border**
border style string of card. Just type like other css.

**borderRadius**
border-radius style string of card. Just type like other css.

**textColor**
color style string of card. Just type like other css.

**fontWeight**
font-weight style string of card. Just type like other css.

**fontFamily**
font-family style string of card. Just type like other css.

**boxShadow**
style string of card. Just type like other css.

## Dependencies

gradient-color
