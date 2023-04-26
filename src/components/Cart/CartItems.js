/** @format */

import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';
const CartItems = (props) => {
  return (
    <div className="cart__items-container">
      <CartItem className="cart__items" />
    </div>
  );
};

export default CartItems;
