/** @format */
import React from 'react';
import MenuItems from './MenuItems';
import MenuTabs from './MenuTabs';
import './MenuPanel.css';

const MenuPanel = (props) => {
  return (
    <div className="menuPanel">
      <MenuTabs menuCategories={props.menuCategories}></MenuTabs>
      <MenuItems menuItems={props.menuItems}></MenuItems>
    </div>
  );
};

export default MenuPanel;
