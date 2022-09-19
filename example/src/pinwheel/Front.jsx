import React from "react";

export default function Front(props) {
  const point = Math.tan(props.radian) * props.height;
  const frontStyle = {
    clipPath: `polygon(0px 0px, 0px ${props.height}px, ${point}px 0px)`,
    zIndex: 10,
  };
  Object.assign(frontStyle, props.style);
  return (
    <div style={frontStyle} name="f">
      {props.text}
    </div>
  );
}
// Front.propTypes = {
//   style: Object,
//   radian: Number,
//   height: Number,
// };
