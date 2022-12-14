/** @format */

import React from 'react';
import './MenuSidebarItem.css';

const MenuSidebarItem = (props) => {
  return (
    <div
      className="menu-sidebar__item menu-sidebar__item-normal"
      data-item-id="2"
    >
      <div className="item-content__thumb">
        <div className="thumb__image">
          <img
            src="http://localhost:1234/hargow.e8c22df6.png?1665557587738"
            alt="item"
            crossOrigin=""
          />
        </div>
        <div className="thumb__title">
          <span>Prawn Dumpling</span>
        </div>
        <div className="thumb__price">
          <span>2.50 </span>
        </div>
      </div>

      <div className="menu-sidebar__item__total">
        <span className="item__currency">$ </span>
        <span className="totalPrice">5.00</span>
      </div>

      <div className="menu-sidebar__item__qty">
        <span className="itemQty">2</span>
      </div>
      <div className="menu-sidebar__item__remove">
        {' '}
        <img
          alt="item"
          src="http://localhost:1234/Trash.1f22d026.png?1665557587738#trash"
          crossOrigin=""
        />
      </div>
    </div>
  );
};

export default MenuSidebarItem;
