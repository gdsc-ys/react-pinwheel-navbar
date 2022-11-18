import React from "react";
import PropTypes from "prop-types";

Front.propTypes = {
  style: PropTypes.object.isRequired,
  radian: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,

  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default function Front(props) {
  const { style, radian, height, text, onClick, link } = props;
  const point = Math.tan(radian) * height;
  const frontStyle = {
    clipPath: `polygon(0px 0px, 0px ${height}px, ${point}px 0px)`,
    zIndex: 10,
  };
  Object.assign(frontStyle, style);
  return (
    <a style={frontStyle} name="f" onClick={onClick} href={link}>
      {text}
    </a>
  );
}
