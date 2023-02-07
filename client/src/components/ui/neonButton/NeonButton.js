import React, {useState} from "react";
import styles from "./NeonButton.module.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NeonButton = () => {
  const [cartCount, setCartCount]= useState(0)

  return (
    <button className={styles.neonButton}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        size="lg"
        color="white"
        style={{ cursor: "pointer" }}
      />
      <sup className={styles.badge}>
        {cartCount}
      </sup>
    </button>
  );
};

export default NeonButton;
