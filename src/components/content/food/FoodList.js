import React from "react";
import foodStyles from "./FoodList.module.css";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const FOOD = [
    { name: "pizza", desc: "a tasty pizza", price: 9.99 },
    { name: "burger", desc: "a tasty burger", price: 6.99 },
    { name: "sushi", desc: "a tasty sushi", price: 12.99 },
    { name: "chicken wings", desc: "a tasty chicken wings", price: 12.99 },
    { name: "menudito", desc: "a tasty menudito", price: 5.99 },
  ];

  return (
    <div className={foodStyles.contentList}>
      <div className={foodStyles.content}>
        <ul>
          <h2>Food list</h2>
          <FoodItem
            itemName={FOOD[0].name}
            itemDesc={FOOD[0].desc}
            itemPrice={FOOD[0].price}
          />
          <FoodItem
            itemName={FOOD[1].name}
            itemDesc={FOOD[1].desc}
            itemPrice={FOOD[1].price}
          />
          <FoodItem
            itemName={FOOD[2].name}
            itemDesc={FOOD[2].desc}
            itemPrice={FOOD[2].price}
          />
          <FoodItem
            itemName={FOOD[3].name}
            itemDesc={FOOD[3].desc}
            itemPrice={FOOD[3].price}
          />
          <FoodItem
            itemName={FOOD[4].name}
            itemDesc={FOOD[4].desc}
            itemPrice={FOOD[4].price}
          />
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
