import React, { useState, useEffect } from "react";
import axios from "axios";
import foodStyles from "./FoodList.module.css";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menu")
      .then((res) => {
        setMenu(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const listItem = menu.map((food) => {
    return (
      <FoodItem
        key={food.id}
        itemName={food.name}
        itemDesc={food.desc}
        itemPrice={food.price}
      />
    );
  });

  return (
    <div>
      <div className={foodStyles.contentList}>
        <div className={foodStyles.content}>
          <ul>
            <h2>Food list</h2>
            {listItem}
          </ul>
        </div>
      </div>
      <div className={foodStyles.contentList}>
        <div className={foodStyles.content}>
          <ul>
            <h2>Food list</h2>
            {listItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
