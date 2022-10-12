/** @format */

import React from 'react';

import MenuPanel from './MenuPanel';
import MenuSidebar from './MenuSidebar';

const Menu = (props) => {
  const classes = props.className;
  return (
    <div className={classes}>
      <MenuPanel
        className=""
        menuItems={props.menuItems}
        menuCategories={props.menuCategories}
      />
      <MenuSidebar />
    </div>
  );
};

export default Menu;
