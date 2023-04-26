/** @format */

import React from 'react';

import MenuPanel from './MenuPanel';
import Cart from '../Cart/Cart';

const Menu = (props) => {
  const classes = props.className;
  let itemAdd;
  const getAddedItem = (item) => {
    itemAdd = item;
  };

  return (
    <div className={classes}>
      <MenuPanel
        className=""
        menuItems={props.menuItems}
        menuCategories={props.menuCategories}
        onAddItem={getAddedItem}
      />
    </div>
  );
};

export default Menu;
