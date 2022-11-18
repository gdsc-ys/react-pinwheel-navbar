import React from "react";
import PropTypes from "prop-types";

Cover.propTypes = {
  style: PropTypes.object.isRequired,
  text: PropTypes.string,

  height: PropTypes.number.isRequired,

  onClick: PropTypes.func,
  link: PropTypes.string,

  problemCard: PropTypes.object.isRequired,
};

export default function Cover(props) {
  const { style, text, onClick, link, problemCard, height } = props;

  let leftTopW = problemCard.leftTop[0];
  let leftTopH = height - problemCard.leftTop[1];
  let rightTopW = problemCard.rightTop[0];
  let rightTopH = height - problemCard.rightTop[1];
  let rightBottomW = problemCard.rightBottom[0];
  let rightBottomH = height - problemCard.rightBottom[1];
  let leftBottomW = 0;
  let leftBottomH = height;

  const coverStyle = {
    zIndex: 0,
    clipPath: `polygon(${leftTopW}px ${leftTopH}px,
      ${rightTopW}px ${rightTopH}px,
      ${rightBottomW}px ${rightBottomH}px,
      ${leftBottomW}px ${leftBottomH}px)`,
  };
  Object.assign(coverStyle, style);
  return (
    <a style={coverStyle} onClick={onClick} href={link} name="cover">
      {text}
    </a>
  );
}
