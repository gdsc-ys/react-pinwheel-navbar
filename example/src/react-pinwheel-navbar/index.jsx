import React from "react";
import Card from "./Card";
import gradient from "gradient-color";
import PropTypes from "prop-types";
import { fullRadian } from "./util/constant";

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
  boxShadow: PropTypes.string,
};

export default function PinwheelNavbar(props) {
  let colors = props.colors;
  const {
    texts,
    number,
    width,
    height,
    border,
    borderRadius,
    textColor,
    fontWeight,
    fontFamily,
    boxShadow,
    links,
    onClicks,
  } = props;
  const radian = fullRadian / number;
  const wrapper = Math.sqrt(height ** 2 + width ** 2);

  const boxStyle = {
    height: wrapper * 2 + "px",
    width: wrapper * 2 + "px",
    boxSizing: "border-box",
    paddingLeft: wrapper,
    paddingTop: wrapper - height,
  };

  if (colors.length < number) {
    colors = gradient(colors, number);
  } else if (colors.length > number) {
    colors = colors.slice(0, number);
  }

  return (
    <div style={boxStyle}>
      {colors.map((color, index) => {
        return (
          <>
            <Card
              key={index}
              width={width}
              height={height}
              color={color}
              radian={radian}
              border={border}
              text={texts[index]}
              index={index}
              borderRadius={borderRadius}
              textColor={textColor}
              fontWeight={fontWeight}
              fontFamily={fontFamily}
              boxShadow={boxShadow}
              onClick={onClicks && onClicks[index]}
              link={links && links[index]}
              number={number}
            ></Card>
          </>
        );
      })}
    </div>
  );
}
