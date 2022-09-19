import React from "react";
import Front from "./Front";
import Back from "./Back";

export default function Card(props) {
  const style = {
    height: props.height + "px",
    width: props.width + "px",
    borderRadius: "5px",
    boxSizing: "border-box",
    padding: "10px",
    color: "white",
    backgroundColor: props.color,
    position: "absolute",
    transformOrigin: "bottom left",
    wordBreak: "break-all",
    transform: `rotate(${
      props.radian * (props.index - 1)
    }rad) translate(0px, 0px)`,
    fontWeight: "bold",
  };
  return (
    <>
      <Front
        style={style}
        radian={props.radian}
        height={props.height}
        text={props.text}
      ></Front>
      <Back style={style} text={props.text}></Back>
    </>
  );
}
// Card.propTypes = {
//   color: String,
//   radian: Number,
//   width: Number,
//   height: Number,
//   index: Number,
// };
