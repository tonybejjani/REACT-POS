/** @format */
import MenuItem from './MenuItem';
import './MenuItems.css';
function MenuItems(props) {
  const getAddedItem = (item) => {
    props.onAddItem(item);
  };
  return (
    <div className="menu-items">
      {props.menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          name={menuItem.name}
          price={menuItem.price}
          img={menuItem.img}
        ></MenuItem>
      ))}
    </div>
  );
}

export default MenuItems;
