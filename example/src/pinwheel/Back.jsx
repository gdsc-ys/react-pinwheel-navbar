import React from "react";

export default function Back(props) {
  const backStyle = {
    boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.3)",
    zIndex: -10,
  };
  Object.assign(backStyle, props.style);
  return <div style={backStyle}>{props.text}</div>;
}
// Back.propTypes = {
//   style: Object,
//   radian: Number,
//   height: Number,
// };
