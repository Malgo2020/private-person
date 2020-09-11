import React from "react";
import "./UICard.css";

const Card = (props) => {
  return (
    <div className="Card" {...props}>
      {props.children}
    </div>
  );
};

export default Card;
