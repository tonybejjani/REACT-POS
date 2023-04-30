/** @format */

import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';
const CartItems = (props) => {
  return (
    <div className="cart__items-container">
      {props.cartItems.map((item) => (
        <CartItem className="cart__items" cartItem={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartItems;
