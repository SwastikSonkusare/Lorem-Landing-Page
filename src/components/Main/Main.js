import React, { useState } from "react";

import { cardContents, items } from "../../assets/data";

import "./Main.scss";
import Card from "../Card/Card";

const Main = () => {
  const [liItem, setLiItem] = useState("");

  const handleClick = (index) => {
    setLiItem(index);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>
          <span>Lorem</span>
          <span>Ipsum</span>
        </h2>

        <ul className="left-section__items">
          {items.map((item, index) => (
            <li className="left-section__item" key={index}>
              <a
                href="#"
                className={
                  liItem === index
                    ? "left-section__links strikethrough"
                    : "left-section__links"
                }
                onClick={() => handleClick(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="btn">Cart</button>
      </div>

      <main className="main">
        <div className="main__container">
          <h1>
            <span>What are you having for Lunch?</span>
          </h1>

          <p className="main__paragraph">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="section">
          {cardContents.map((content, index) => (
            <Card content={content} key={index} />
          ))}
        </div>
        <p className="main__paragraph section__paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et.
        </p>
      </main>
    </div>
  );
};

export default Main;
