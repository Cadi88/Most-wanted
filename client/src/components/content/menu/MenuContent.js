import React from "react";
import mainStyles from "./MainContent.module.css";
import NeonButton from "../../ui/neonButton/NeonButton";

import FoodList from "./FoodList";

const MenuContent = () => {
  const LISTS = [
    { listName: "Burger", listDesc: "tasty burgers" },
    { listName: "Sauces", listDesc: "Sauces TEST" },
  ];
  const list = LISTS.map((rawlistItem) => {
    return (
      <FoodList
        listName={rawlistItem.listName}
        listDesc={rawlistItem.listDesc}
      />
    );
  });

  return (
    <div className={mainStyles.mainContent}>
      <div className={mainStyles.neonButton}>
        {list}
        <NeonButton />
      </div>
    </div>
  );
};

export default MenuContent;
