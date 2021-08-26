import React, { useState } from "react";

import image1 from "../../images/chad-montano-lP5MCM6nZ5A-unsplash.jpg";
import image2 from "../../images/photo.jpg";
import image3 from "../../images/Indian-Spiced-Chicken-Burger-5.jpg";
import image4 from "../../images/Spicy_Chicken_Nachos_Recipe_With_Salsa_And_Sour_Cream-1.jpg";
import image5 from "../../images/hakka-noodles-recipe.jpg";

import "./Main.scss";
import Card from "../Card/Card";

const Main = () => {
  const cardContents = [
    {
      img: image1,
      text: "Mexican Taco",
    },
    {
      img: image2,
      text: "Farmhouse Pizza",
    },
    {
      img: image3,
      text: "Chicken Burger",
    },
    {
      img: image4,
      text: "Loaded Nachos",
    },
    {
      img: image5,
      text: "Hakka Noodles",
    },
  ];

  const items = ["About", "Services", "Cuisine", "Gallery", "Contact", "Book"];

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
            <li className="left-section__item">
              <a
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
          {cardContents.map((content) => (
            <Card content={content} />
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
