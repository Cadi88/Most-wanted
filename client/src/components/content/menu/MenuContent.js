import React from "react";
import mainStyles from "./MainContent.module.css";

import FoodList from "./FoodList";

const MenuContent = () => {
  return (
    <div className={mainStyles.mainContent}>
      <FoodList />
    </div>
  );
};

export default MenuContent;
