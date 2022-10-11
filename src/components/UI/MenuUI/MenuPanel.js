/** @format */
import React from 'react';
import MenuItems from '../../Menu/MenuItems';
import './MenuPanel.css';

const MenuPanel = (props) => {
  return <MenuItems menuItems={props.menuItems}></MenuItems>;
};

export default MenuPanel;
