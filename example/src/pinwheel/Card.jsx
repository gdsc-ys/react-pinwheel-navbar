import { React } from "react";
import Front from "./Front";
import Back from "./Back";
import PropTypes from "prop-types";

Card.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,

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
  link: PropTypes.string,
};

export default function Card(props) {
  const {
    index,
    color,
    text,
    width,
    height,
    radian,

    border,
    borderRadius,
    textColor,
    fontWeight,
    fontFamily,
    boxShadow,

    link,
    onClick,
  } = props;

  const style = {
    height: height + "px",
    width: width + "px",
    borderRadius: borderRadius ?? "5px",
    border: border ?? "none",
    boxSizing: "border-box",
    padding: "10px",
    color: textColor ?? "white",
    backgroundColor: color,

    wordBreak: "break-all",

    position: "absolute",
    transformOrigin: "bottom left",
    transform: `rotate(${props.radian * (index - 1)}rad) translate(0px, 0px)`,

    fontWeight: fontWeight ?? "bold",
    fontFamily: fontFamily,
  };
  return (
    <>
      <Front
        style={style}
        radian={radian}
        height={height}
        text={text}
        onClick={onClick}
        link={link}
      ></Front>
      <Back
        style={style}
        text={text}
        boxShadow={boxShadow ?? "none"}
        onClick={onClick}
        link={link}
      ></Back>
    </>
  );
}
