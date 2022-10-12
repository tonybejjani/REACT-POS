/** @format */
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuTabs from './MenuTabs';
import './MenuPanel.css';

const MenuPanel = (props) => {
  const [itemsPerCat, setItemsPerCat] = useState(props.menuCategories);

  const getCategory = (category) => {
    const catItems = props.menuItems.filter((item) => item.catId === category);

    setItemsPerCat(catItems);
  };
  return (
    <div className="menuPanel">
      <MenuTabs
        menuCategories={props.menuCategories}
        itemsCategory={getCategory}
      ></MenuTabs>
      <MenuItems menuItems={itemsPerCat}></MenuItems>
    </div>
  );
};

export default MenuPanel;
