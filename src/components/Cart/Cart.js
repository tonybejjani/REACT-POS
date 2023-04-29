/** @format */
import { useContext } from 'react';
import React from 'react';
import cartContext from '../../store/cart-context';
import Spacer from '../UI/Spacer';
import './Cart.css';
import CartItems from './CartItems';

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  return (
    <Spacer className="cart">
      <CartItems cartItems={cartCtx.items} />
    </Spacer>
  );
};

export default Cart;
