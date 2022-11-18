'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var gradient = require('gradient-color');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var gradient__default = /*#__PURE__*/_interopDefaultLegacy(gradient);

Front.propTypes = {
  style: PropTypes__default["default"].object.isRequired,
  radian: PropTypes__default["default"].number.isRequired,
  height: PropTypes__default["default"].number.isRequired,
  text: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  link: PropTypes__default["default"].string
};
function Front(props) {
  var style = props.style,
      radian = props.radian,
      height = props.height,
      text = props.text,
      onClick = props.onClick,
      link = props.link;
  var point = Math.tan(radian) * height;
  var frontStyle = {
    clipPath: "polygon(0px 0px, 0px ".concat(height, "px, ").concat(point, "px 0px)"),
    zIndex: 10
  };
  Object.assign(frontStyle, style);
  return /*#__PURE__*/React__default["default"].createElement("a", {
    style: frontStyle,
    name: "f",
    onClick: onClick,
    href: link
  }, text);
}

Back.propTypes = {
  style: PropTypes__default["default"].object.isRequired,
  text: PropTypes__default["default"].string,
  boxShadow: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  link: PropTypes__default["default"].string
};
function Back(props) {
  var style = props.style,
      text = props.text,
      boxShadow = props.boxShadow,
      onClick = props.onClick,
      link = props.link;
  var backStyle = {
    boxShadow: boxShadow,
    zIndex: -10
  };
  Object.assign(backStyle, style);
  return /*#__PURE__*/React__default["default"].createElement("a", {
    style: backStyle,
    onClick: onClick,
    href: link
  }, text);
}

Cover.propTypes = {
  style: PropTypes__default["default"].object.isRequired,
  text: PropTypes__default["default"].string,
  height: PropTypes__default["default"].number.isRequired,
  onClick: PropTypes__default["default"].func,
  link: PropTypes__default["default"].string,
  problemCard: PropTypes__default["default"].object.isRequired
};
function Cover(props) {
  var style = props.style,
      text = props.text,
      onClick = props.onClick,
      link = props.link,
      problemCard = props.problemCard,
      height = props.height;
  var leftTopW = problemCard.leftTop[0];
  var leftTopH = height - problemCard.leftTop[1];
  var rightTopW = problemCard.rightTop[0];
  var rightTopH = height - problemCard.rightTop[1];
  var rightBottomW = problemCard.rightBottom[0];
  var rightBottomH = height - problemCard.rightBottom[1];
  var leftBottomW = 0;
  var leftBottomH = height;
  var coverStyle = {
    zIndex: 0,
    clipPath: "polygon(".concat(leftTopW, "px ").concat(leftTopH, "px,\n      ").concat(rightTopW, "px ").concat(rightTopH, "px,\n      ").concat(rightBottomW, "px ").concat(rightBottomH, "px,\n      ").concat(leftBottomW, "px ").concat(leftBottomH, "px)")
  };
  Object.assign(coverStyle, style);
  return /*#__PURE__*/React__default["default"].createElement("a", {
    style: coverStyle,
    onClick: onClick,
    href: link,
    name: "cover"
  }, text);
}

var fullRadian = Math.PI * 2;
var quaterRadian = Math.PI / 2;

function calCoordinate(width, height, number) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var fullrad = Math.PI * 2;
  var onerad = fullrad / number;
  var inRad = onerad * i;
  var leftbottomW = 0;
  var leftbottomH = 0;
  var lefttopW = -Math.sin(inRad) * height;
  var lefttopH = Math.cos(inRad) * height;
  var rightbottomW = Math.cos(inRad) * width;
  var rightbottomH = Math.sin(inRad) * width;
  var righttopH = lefttopH + rightbottomH;
  var righttopW = lefttopW + rightbottomW;
  var clipCord = {
    leftTop: [lefttopW, lefttopH],
    rightTop: [righttopW, righttopH],
    leftBottom: [leftbottomW, leftbottomH],
    rightBottom: [rightbottomW, rightbottomH]
  };
  return clipCord;
}

Card.propTypes = {
  color: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string,
  index: PropTypes__default["default"].number.isRequired,
  number: PropTypes__default["default"].number.isRequired,
  width: PropTypes__default["default"].number.isRequired,
  height: PropTypes__default["default"].number.isRequired,
  radian: PropTypes__default["default"].number.isRequired,
  border: PropTypes__default["default"].string,
  borderRadius: PropTypes__default["default"].string,
  textColor: PropTypes__default["default"].string,
  fontWeight: PropTypes__default["default"].string,
  fontFamily: PropTypes__default["default"].string,
  boxShadow: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  link: PropTypes__default["default"].string
};
function Card(props) {
  var index = props.index,
      color = props.color,
      text = props.text,
      width = props.width,
      height = props.height,
      radian = props.radian,
      border = props.border,
      borderRadius = props.borderRadius,
      textColor = props.textColor,
      fontWeight = props.fontWeight,
      fontFamily = props.fontFamily,
      boxShadow = props.boxShadow,
      link = props.link,
      onClick = props.onClick,
      number = props.number;
  var style = {
    height: height + "px",
    width: width + "px",
    borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : "5px",
    border: border !== null && border !== void 0 ? border : "none",
    boxSizing: "border-box",
    padding: "10px",
    color: textColor !== null && textColor !== void 0 ? textColor : "white",
    backgroundColor: color,
    textDecoration: "none",
    wordBreak: "break-all",
    position: "absolute",
    transformOrigin: "bottom left",
    transform: "rotate(".concat(props.radian * (index - 1), "rad) translate(0px, 0px)"),
    fontWeight: fontWeight !== null && fontWeight !== void 0 ? fontWeight : "bold",
    fontFamily: fontFamily
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Front, {
    style: style,
    radian: radian,
    height: height,
    text: text,
    onClick: onClick,
    link: link
  }), /*#__PURE__*/React__default["default"].createElement(Back, {
    style: style,
    text: text,
    boxShadow: boxShadow !== null && boxShadow !== void 0 ? boxShadow : "none",
    onClick: onClick,
    link: link
  }), 0 <= radian * index && radian * index < quaterRadian && /*#__PURE__*/React__default["default"].createElement(Cover, {
    style: style,
    problemCard: calCoordinate(width, height, number, index),
    height: height,
    text: text
  }));
}

PinwheelNavbar.propTypes = {
  colors: PropTypes__default["default"].array.isRequired,
  texts: PropTypes__default["default"].array.isRequired,
  links: PropTypes__default["default"].array,
  onClicks: PropTypes__default["default"].array,
  number: PropTypes__default["default"].number.isRequired,
  width: PropTypes__default["default"].number.isRequired,
  height: PropTypes__default["default"].number.isRequired,
  border: PropTypes__default["default"].string,
  borderRadius: PropTypes__default["default"].string,
  textColor: PropTypes__default["default"].string,
  fontWeight: PropTypes__default["default"].string,
  fontFamily: PropTypes__default["default"].string,
  boxShadow: PropTypes__default["default"].string
};
function PinwheelNavbar(props) {
  var colors = props.colors;
  var texts = props.texts,
      number = props.number,
      width = props.width,
      height = props.height,
      border = props.border,
      borderRadius = props.borderRadius,
      textColor = props.textColor,
      fontWeight = props.fontWeight,
      fontFamily = props.fontFamily,
      boxShadow = props.boxShadow,
      links = props.links,
      onClicks = props.onClicks;
  var radian = fullRadian / number;
  var wrapper = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
  var boxStyle = {
    height: wrapper * 2 + "px",
    width: wrapper * 2 + "px",
    boxSizing: "border-box",
    paddingLeft: wrapper,
    paddingTop: wrapper - height
  };

  if (colors.length < number) {
    colors = gradient__default["default"](colors, number);
  } else if (colors.length > number) {
    colors = colors.slice(0, number);
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: boxStyle
  }, colors.map(function (color, index) {
    return /*#__PURE__*/React__default["default"].createElement(Card, {
      key: index,
      width: width,
      height: height,
      color: color,
      radian: radian,
      border: border,
      text: texts[index],
      index: index,
      borderRadius: borderRadius,
      textColor: textColor,
      fontWeight: fontWeight,
      fontFamily: fontFamily,
      boxShadow: boxShadow,
      onClick: onClicks && onClicks[index],
      link: links && links[index],
      number: number
    });
  }));
}

module.exports = PinwheelNavbar;
//# sourceMappingURL=index.js.map
