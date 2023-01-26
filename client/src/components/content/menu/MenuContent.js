import React from "react";
import mainStyles from "./MainContent.module.css";
import NeonButton from "../../ui/neonButton/NeonButton";

import FoodList from "./FoodList";

const MenuContent = () => {
  return (
    <div className={mainStyles.mainContent}>
      <FoodList />
      <NeonButton />
    </div>
  );
};

export default MenuContent;
