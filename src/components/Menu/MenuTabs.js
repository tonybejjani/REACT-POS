/** @format */

import React from 'react';
import MenuTab from './MenuTab';
import './MenuTabs.css';
const MenuTabs = (props) => {
  const getCategory = (category) => {
    props.itemsCategory(category);
  };

  return (
    <ul className="menu-tabs">
      {props.menuCategories.map((cat) => (
        <MenuTab
          key={cat.id}
          id={cat.id}
          name={cat.name}
          active={cat.active}
          category={getCategory}
        ></MenuTab>
      ))}
    </ul>
  );
};

export default MenuTabs;
