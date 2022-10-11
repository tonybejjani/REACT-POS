/** @format */

import React from 'react';
import Spacer from '../Spacer';
import MenuPanel from './MenuPanel';
// import NewOrderSidebar from './NewOrderSidebar';

import './Menu.js';
const Menu = (props) => {
  return (
    <Spacer className="">
      <MenuPanel className="" menuItems={props.menuItems} />
      {/* <NewOrderSidebar className=""></NewOrderSidebar> */}
    </Spacer>
  );
};

export default Menu;
