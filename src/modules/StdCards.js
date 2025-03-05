import React from "react";

function StdCard(props) {
  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: "12px",
        padding: "1.25rem",
        maxWidth: "320px",
        minWidth: "250px",
      }}
    >
      <button>{props.stdDetails.class}</button>
      <h3>Name: {props.stdDetails.name}</h3>
      <p>streem: {props.stdDetails.subStream} </p>
    </div>
  );
}

export default StdCard;
