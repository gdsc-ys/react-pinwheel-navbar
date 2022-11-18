import React from "react";
import PropTypes from "prop-types";

Back.propTypes = {
  style: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  boxShadow: PropTypes.string,

  onClick: PropTypes.func,
  link: PropTypes.string,
};

export default function Back(props) {
  const { style, text, boxShadow, onClick, link } = props;
  const backStyle = {
    boxShadow: boxShadow,
    zIndex: -10,
  };
  // console.log("back click", onClick);
  // console.log("back link", link);
  Object.assign(backStyle, style);

  return (
    <a style={backStyle} onClick={onClick} href={link}>
      {text}
    </a>
  );
}
// Back.propTypes = {
//   style: Object,
//   radian: Number,
//   height: Number,
// };
