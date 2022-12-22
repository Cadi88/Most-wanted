import React, { useState } from "react";
import foodStyles from "./FoodList.module.css";
import FoodItem from "./FoodItem";
import { Button, Group } from "@mantine/core";

const FoodList = () => {
  const [finalPrice, setFinalPrice] = useState(0);

  const FOODS = [
    { id: 1, name: "pizza", desc: "a tasty pizza", price: 9.99 },
    { id: 2, name: "burger", desc: "a tasty burger", price: 6.99 },
    { id: 3, name: "sushi", desc: "a tasty sushi", price: 12.99 },
    {
      id: 4,
      name: "chicken wings",
      desc: "a tasty chicken wings",
      price: 12.99,
    },
    { id: 5, name: "menudito", desc: "a tasty menudito", price: 5.99 },
  ];

  const listItem = FOODS.map((food) => {
    return (
      <FoodItem
        key={food.id}
        itemName={food.name}
        itemDesc={food.desc}
        itemPrice={food.price}
      />
    );
  });

  const increasePricehandler = () => {
    let increasedPrice = finalPrice + 1;
    setFinalPrice(increasedPrice);
  };

  const decreasePricehandler = () => {
    let decreasedPrice = finalPrice - 1;

    if (decreasedPrice <= 0) {
      setFinalPrice(0);
    } else {
      setFinalPrice(decreasedPrice);
    }
  };

  return (
    <div className={foodStyles.contentList}>
      <div className={foodStyles.content}>
        <ul>
          <h2>Food list</h2>
          {listItem}
        </ul>
      </div>
      <span>{finalPrice}</span>
      <Group position="center">
        <Button uppercase variant="outline" onClick={decreasePricehandler}>
          Decrement price
        </Button>
        <Button uppercase variant="outline" onClick={increasePricehandler}>
          Increment price
        </Button>
      </Group>
    </div>
  );
};

export default FoodList;
