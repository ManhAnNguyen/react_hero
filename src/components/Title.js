import React from "react";
import "./title.css";

const Title = ({ color, fontSize, text }) => {
  return (
    <h1
      style={{
        color: color || "gray",
        fontSize: fontSize,
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
