import React from "react";
import PropTypes from "prop-types";

import Front from "./part/Front.jsx";
import Back from "./part/Back.jsx";
import Cover from "./part/Cover.jsx";

import { quaterRadian } from "../util/constant";
import calCoordinate from "../util/calCoordinate";

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

    number,
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
    textDecoration: "none",

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
      {0 <= radian * index && radian * index < quaterRadian && (
        <Cover
          style={style}
          problemCard={calCoordinate(width, height, number, index)}
          height={height}
          text={text}
        ></Cover>
      )}
    </>
  );
}
