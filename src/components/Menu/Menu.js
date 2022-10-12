/** @format */

import React from 'react';
import Spacer from '../UI/Spacer';
import MenuPanel from './MenuPanel';
// import NewOrderSidebar from './NewOrderSidebar';

const Menu = (props) => {
  const classes = props.className;
  return (
    <Spacer className={classes}>
      <MenuPanel
        className=""
        menuItems={props.menuItems}
        menuCategories={props.menuCategories}
      />
      {/* <NewOrderSidebar className=""></NewOrderSidebar> */}
    </Spacer>
  );
};

export default Menu;
