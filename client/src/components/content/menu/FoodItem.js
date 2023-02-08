import React from "react";
import { ActionIcon } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./FoodList.module.css";

const FoodItem = ({ itemName, itemDesc, itemPrice }) => {
  return (
    <li className={styles.foodItem}>
      <div className={styles.itemContainer}>
        <div className={styles.selectBox}>
          <ActionIcon>
            <FontAwesomeIcon
              icon={faMinus}
              size="sm"
              color="green"
              style={{ cursor: "pointer" }}
            />
          </ActionIcon>
          <span className={styles.itemName}>{itemName}</span>
          <ActionIcon>
            <FontAwesomeIcon
              icon={faPlus}
              size="sm"
              color="green"
              style={{ cursor: "pointer" }}
            />
          </ActionIcon>
        </div>
        <i>{itemDesc}</i>
        <span className={styles.foodPrice}>{itemPrice}$</span>
      </div>
    </li>
  );
};

export default FoodItem;
