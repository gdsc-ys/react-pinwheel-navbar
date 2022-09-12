import React from "react";
import gradient from "gradient-color";

export default function PinwheelNavbar(props) {
    const number = props.number;
    const color = props.color;
    const gradientColor = gradient(color, number)  
    return <div>{gradientColor}</div>;
}