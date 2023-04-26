/** @format */
import React, { useState } from 'react';
import MenuItems from './MenuItems';
import MenuTabs from './MenuTabs';
import Spacer from '../UI/Spacer';
import './MenuPanel.css';

const MenuPanel = (props) => {
  const initActiveCat = props.menuCategories.filter(
    (cat) => cat.active === true
  );

  const initItemsPerCat = props.menuItems.filter(
    (item) => item.catId === initActiveCat[0].id
  );

  const [itemsPerCat, setItemsPerCat] = useState(initItemsPerCat);

  const getCategory = (category) => {
    const catItems = props.menuItems.filter((item) => item.catId === category);

    setItemsPerCat(catItems);
  };

  const getAddedItem = (item) => {
    console.log(item);
    props.onAddItem(item);
    // newOrderLog.push(item);
    // console.log(newOrderLog);
  };
  return (
    <Spacer className="menu-panel">
      <MenuTabs
        menuCategories={props.menuCategories}
        itemsCategory={getCategory}
      ></MenuTabs>
      <MenuItems menuItems={itemsPerCat} onAddItem={getAddedItem}></MenuItems>
    </Spacer>
  );
};

export default MenuPanel;
