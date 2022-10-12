/** @format */

import React from 'react';
import Spacer from '../UI/Spacer';
import './MenuSidebar.css';
import MenuSidebarItems from './MenuSidebarItems';

const MenuSidebar = (props) => {
  return (
    <Spacer className="menu-sidebar">
      <MenuSidebarItems />
    </Spacer>
  );
};

export default MenuSidebar;
