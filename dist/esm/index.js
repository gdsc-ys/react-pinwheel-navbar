import React from 'react';
import PropTypes from 'prop-types';
import gradient from 'gradient-color';

Front.propTypes = {
  style: PropTypes.object.isRequired,
  radian: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string
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
  return /*#__PURE__*/React.createElement("a", {
    style: frontStyle,
    name: "f",
    onClick: onClick,
    href: link
  }, text);
}

Back.propTypes = {
  style: PropTypes.object.isRequired,
  text: PropTypes.string,
  boxShadow: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string
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
  return /*#__PURE__*/React.createElement("a", {
    style: backStyle,
    onClick: onClick,
    href: link
  }, text);
}

Cover.propTypes = {
  style: PropTypes.object.isRequired,
  text: PropTypes.string,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
  problemCard: PropTypes.object.isRequired
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
  console.log("polygon(".concat(leftTopW, "px ").concat(leftTopH, "px,\n    ").concat(rightTopW, "px ").concat(rightTopH, "px,\n    ").concat(rightBottomW, "px ").concat(rightBottomH, "px,\n    ").concat(leftBottomW, "px ").concat(leftBottomH, "px);"));
  var coverStyle = {
    zIndex: 0,
    clipPath: "polygon(".concat(leftTopW, "px ").concat(leftTopH, "px,\n      ").concat(rightTopW, "px ").concat(rightTopH, "px,\n      ").concat(rightBottomW, "px ").concat(rightBottomH, "px,\n      ").concat(leftBottomW, "px ").concat(leftBottomH, "px)")
  };
  Object.assign(coverStyle, style);
  return /*#__PURE__*/React.createElement("a", {
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
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  radian: PropTypes.number.isRequired,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  boxShadow: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Front, {
    style: style,
    radian: radian,
    height: height,
    text: text,
    onClick: onClick,
    link: link
  }), /*#__PURE__*/React.createElement(Back, {
    style: style,
    text: text,
    boxShadow: boxShadow !== null && boxShadow !== void 0 ? boxShadow : "none",
    onClick: onClick,
    link: link
  }), 0 <= radian * index && radian * index < quaterRadian && /*#__PURE__*/React.createElement(Cover, {
    style: style,
    problemCard: calCoordinate(width, height, number, index),
    height: height,
    text: text
  }));
}

PinwheelNavbar.propTypes = {
  colors: PropTypes.array.isRequired,
  texts: PropTypes.array.isRequired,
  links: PropTypes.array,
  onClicks: PropTypes.array,
  number: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  boxShadow: PropTypes.string
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
    colors = gradient(colors, number);
  } else if (colors.length > number) {
    colors = colors.slice(0, number);
  }

  return /*#__PURE__*/React.createElement("div", {
    style: boxStyle
  }, colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement(Card, {
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

export { PinwheelNavbar as default };
//# sourceMappingURL=index.js.map
