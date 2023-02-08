import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "@mantine/core";

import foodStyles from "./FoodList.module.css";
import FoodItem from "./FoodItem";

const FoodList = ({listName, listDesc}) => {
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
    <div className={foodStyles.contentList}>
      <div className={foodStyles.content}>
        <ul>
          <h2>
            Food list<p> (JUST BREAD & MEAT PRICE)</p>
          </h2>
          {listItem}
        </ul>
      </div>
    {/*   <div className={foodStyles.content}>
        <ul>
          <h2>
            Sauces list<p> (IMPROVE YOUR BURGER PERFORMANCE)</p>
          </h2>
          {listItem}
        </ul>
      </div> */}
    </div>
  );
};

export default FoodList;
