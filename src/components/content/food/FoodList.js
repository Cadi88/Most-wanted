import React from "react";
import foodStyles from "./FoodList.module.css";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const FOODS = [
    { name: "pizza", desc: "a tasty pizza", price: 9.99 },
    { name: "burger", desc: "a tasty burger", price: 6.99 },
    { name: "sushi", desc: "a tasty sushi", price: 12.99 },
    { name: "chicken wings", desc: "a tasty chicken wings", price: 12.99 },
    { name: "menudito", desc: "a tasty menudito", price: 5.99 },
  ];

  const listItem = FOODS.map((food) => {
    return (
      <FoodItem
        itemName={food.name}
        itemDesc={food.desc}
        itemPrice={food.price}
      />
    );
  });

  return (
    <div className={foodStyles.contentList}>
      <div className={foodStyles.content}>
        <ul>
          <h2>Food list</h2>
          {listItem}.
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
