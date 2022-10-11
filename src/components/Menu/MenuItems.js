/** @format */
import MenuItem from './MenuItem';
import './MenuItems.css';
function MenuItems(props) {
  return (
    <div className="menuItems">
      {props.menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          name={menuItem.name}
          price={menuItem.price}
          img={menuItem.img}
        ></MenuItem>
      ))}
    </div>
  );
}

export default MenuItems;
