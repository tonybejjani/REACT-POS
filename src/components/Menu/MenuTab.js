/** @format */

import React from 'react';
import './MenuTab.css';
const MenuTab = (props) => {
  let classes = `menu-tabs__link ${props.active ? 'menu-tabs__active' : ''}`;

  const getCategory = () => {
    props.category(props.id);
  };

  return (
    <li className="menu-tab">
      <a href="#test" className={classes} onClick={getCategory}>
        {props.name}
      </a>
    </li>
  );
};

export default MenuTab;
