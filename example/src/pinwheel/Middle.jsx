import React from "react";

export default function Cover(props) {
  const point = Math.tan(props.radian) * props.height;
  const middleStyle = {
    clipPath: `polygon(0px 0px, 0px ${props.height}px, ${point}px 0px)`,
    zIndex: 10,
  };
  Object.assign(middleStyle, props.style);
  return (
    <a style={middleStyle} name="f">
      {props.text}
    </a>
  );
}
// Front.propTypes = {
//   style: Object,
//   radian: Number,
//   height: Number,
// };
