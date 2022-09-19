import React from "react";
import Card from "./Card";
import Middle from "./Middle";
import gradient from "gradient-color";

export default function PinwheelNavbar(props) {
  let colors = props.colors;
  const number = props.number;
  const width = props.width;
  const height = props.height;
  const fullRadian = Math.PI * 2;
  const quaterRadian = Math.PI / 2;
  const radian = fullRadian / number;
  const wrapper = Math.sqrt(height ** 2 + width ** 2);

  const styleObj = {
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
    <div style={styleObj}>
      {colors.map((color, index) => {
        return (
          <>
            <Card
              key={index}
              width={width}
              height={height}
              color={color}
              radian={radian}
              index={index}
              text={props.texts[index]}
            ></Card>
            {0 < radian * index && radian * index < quaterRadian && (
              <>
                <div></div>
                <div></div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

// PinwheelNavbar.propTypes = {
//   colors: Array,
//   number: Number,
//   width: Number,
//   height: Number,
// };
