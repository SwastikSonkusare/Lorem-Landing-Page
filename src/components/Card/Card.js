import React from "react";

import "./Card.scss";

const Card = ({ content }) => {
  return (
    <div className="card">
      <img src={content.img} alt="food"></img>
      <span>{content.text}</span>
    </div>
  );
};

export default Card;
