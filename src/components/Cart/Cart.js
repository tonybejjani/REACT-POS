/** @format */

import React from 'react';
import Spacer from '../UI/Spacer';
import './Cart.css';
import CartItems from './CartItems';

const Cart = (props) => {
  console.log(props.itemToAdd);
  return (
    <Spacer className="cart">
      <CartItems itemToAdd={props.itemToAdd} />
    </Spacer>
  );
};

export default Cart;
