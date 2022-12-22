import React from "react";
import styles from "./FoodList.module.css";

const FoodItem = ({ itemName, itemDesc, itemPrice }) => {
  return (
    <li className={styles.foodItem}>
      <div className={styles.itemContainer}>
        <span className={styles.itemName}>{itemName}</span> <i>{itemDesc}</i>
        <span className={styles.foodFont}>{itemPrice}</span>$
      </div>
    </li>
  );
};

export default FoodItem;
