/** @format */
import { useContext } from 'react';

import './MenuItem.css';
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

import cartContext from '../../store/cart-context';

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

function MenuItem(props) {
  const imgPick = imgs[props.img];

  const cartCtx = useContext(cartContext);

  const getAddedItemData = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      totalItemAmount: props.price,
      img: props.img,
      qty: 1,
    };

    cartCtx.addItem(item);
  };
  return (
    <div className="menu-item">
      <div className="menu-item__image">
        <img src={imgPick} alt={props.name} />
      </div>
      <div className="menu-item__details">
        <h3 className="heading--tertiary menu-item__title">{props.name}</h3>
        <span className="menu-item__price">$ {props.price}</span>
        <button className="menu-item__button" onClick={getAddedItemData}>
          + Add
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
