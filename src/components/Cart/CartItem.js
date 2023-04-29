/** @format */

import React from 'react';
import './CartItem.css';
import buns from '../../img/menu/buns.png';
import chicken from '../../img/menu/chicken.png';
import hargow from '../../img/menu/hargow.png';
import siumai from '../../img/menu/siumai.png';
import xlb from '../../img/menu/xlb.png';
import water from '../../img/menu/water.png';
import solo from '../../img/menu/solo.png';
import fanta from '../../img/menu/fanta.png';
import coke from '../../img/menu/coke.png';
import cokez from '../../img/menu/coke-zero.png';
import sprite from '../../img/menu/sprite.png';
import duck_x2 from '../../img/menu/duck_x2.png';
import duck_x4 from '../../img/menu/duck_x4.png';
import duck_x6 from '../../img/menu/duck_x6.png';
import crackers from '../../img/menu/crackers.png';

const imgs = {
  xlb,
  hargow,
  chicken,
  siumai,
  buns,
  water,
  solo,
  fanta,
  coke,
  cokez,
  sprite,
  duck_x2,
  duck_x4,
  duck_x6,
  crackers,
};
const CartItem = (props) => {
  const imgPick = imgs[props.cartItem.img];
  const item = props.cartItem;

  return (
    <div className="cart__item cart__item-normal" data-item-id="2">
      <div className="item-content__thumb">
        <div className="thumb__image">
          <img src={imgPick} alt="item" crossOrigin="" />
        </div>
        <div className="thumb__title">
          <span>{item.name}</span>
        </div>
        <div className="thumb__price">
          <span>{item.price} </span>
        </div>
      </div>

      <div className="cart__item__total">
        <span className="item__currency">$ </span>
        <span className="totalPrice">5.00</span>
      </div>

      <div className="cart__item__qty">
        <span className="itemQty">{item.qty}</span>
      </div>
      <div className="cart__item__remove">-</div>
    </div>
  );
};

export default CartItem;
