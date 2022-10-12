/** @format */

import React from 'react';
import MenuTab from './MenuTab';
import './MenuTabs.css';
const MenuTabs = (props) => {
  return (
    <ul className="menu-tabs">
      {props.menuCategories.map((cat) => (
        <MenuTab key={cat.id} name={cat.name} active={cat.active}></MenuTab>
      ))}
    </ul>
  );
};

export default MenuTabs;
