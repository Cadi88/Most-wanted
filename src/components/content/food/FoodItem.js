import React from "react";
import styles from "./FoodList.module.css";

function FoodItem({ itemName, itemDesc, itemPrice }) {
  return (
    <li className={styles.foodItem}>
      <strong>{itemName}</strong> <i>{itemDesc}</i>
      <span className={styles.foodFont}>{itemPrice}</span>$
    </li>
  );
}

export default FoodItem;
