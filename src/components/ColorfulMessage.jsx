import React from "react";

export const ColorfulMessage = (props) => {
  console.log("ColofulMessage first");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "19px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
