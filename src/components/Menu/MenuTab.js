/** @format */

import React from 'react';
import './MenuTab.css';
const MenuTab = (props) => {
  console.log(props.active);
  const classes = `menu-tabs__link ${props.active ? 'menu-tabs__active' : ''}`;
  console.log(classes);
  return (
    <li className="menu-tab">
      <a href="#test" className={classes} data-category-id={props.key}>
        {props.name}
      </a>
    </li>
  );
};

export default MenuTab;
