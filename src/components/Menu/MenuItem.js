/** @format */
import './MenuItem.css';
import buns from '../../img/menu/buns.png';
import chicken from '../../img/menu/chicken.png';
import hargow from '../../img/menu/hargow.png';
import siumai from '../../img/menu/siumai.png';
import xlb from '../../img/menu/xlb.png';

function MenuItem(props) {
  const imgs = {
    xlb,
    hargow,
    chicken,
    siumai,
    buns,
  };

  const imgPick = imgs[props.img];

  return (
    <div className="menu-item">
      <div className="menu-item__image">
        <img src={imgPick} alt={props.name} />
      </div>
      <div className="menu-item__details">
        <h3 className="heading--tertiary menu-item__title">{props.name}</h3>
        <span className="menu-item__price">${props.price}</span>
        <button className="menu-item__button">Add</button>
      </div>
    </div>
  );
}

export default MenuItem;
