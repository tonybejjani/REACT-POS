/** @format */

import React, { useState } from 'react';
import MenuTab from './MenuTab';
import './MenuTabs.css';
const MenuTabs = (props) => {
  const [menuCategories, setMenuCategories] = useState(props.menuCategories);

  const getCategory = (category) => {
    props.itemsCategory(category);

    setMenuCategories(
      props.menuCategories.map((cat) => {
        if (cat.id === category) {
          cat.active = true;
          return cat;
        } else {
          cat.active = false;
          return cat;
        }
      })
    );
  };

  return (
    <ul className="menu-tabs">
      {menuCategories.map((cat) => (
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
