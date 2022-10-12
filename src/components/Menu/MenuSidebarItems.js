/** @format */

import React from 'react';
import MenuSidebarItem from './MenuSidebarItem';
import './MenuSidebarItems.css';
const MenuSidebarItems = (props) => {
  return (
    <div className="menu-sidebar__items-container">
      <MenuSidebarItem className="menu-sidebar__items" />
    </div>
  );
};

export default MenuSidebarItems;
