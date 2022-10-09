/** @format */
import MenuItem from './MenuItem';

function MenuItems(props) {
  return (
    <div>
      {props.menuItems.map((menuItem) => (
        <MenuItem
          name={menuItem.name}
          price={menuItem.price}
          img={menuItem.img}
        ></MenuItem>
      ))}
    </div>
  );
}

export default MenuItems;
