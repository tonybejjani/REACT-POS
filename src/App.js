/** @format */
import Container from './components/UI/Container';
import MainPanel from './components/UI/MainPanel';
import NavBar from './components/UI/NavBar';
import Menu from './components/Menu/Menu';
import './components/Menu/Menu.css';

function App() {
  const menuCategories = [
    {
      id: 1,
      name: 'Yumcha',
      active: true,
    },
    {
      id: 2,
      name: 'Peking Duck',
      active: false,
    },
    {
      id: 3,
      name: 'Drinks',
      active: false,
    },
    {
      id: 4,
      name: 'Sides',
      active: false,
    },
  ];

  const menuItems = [
    {
      id: 1,
      catId: 1,
      catgName: 'Yumcha',
      name: 'Pork Soup Dumpling',
      price: 2.0,
      qty: 1,
      img: 'xlb',
    },
    {
      id: 2,
      catId: 1,
      catgName: 'Yumcha',
      name: 'Prawn Dumpling',
      price: 2.5,
      qty: 1,
      img: 'hargow',
    },
    {
      id: 3,
      catId: 1,
      catgName: 'Yumcha',
      name: 'BBQ Pork Buns',
      price: 3,
      qty: 1,
      img: 'buns',
      special_deal_limit: 2,
    },
    {
      id: 4,
      catId: 1,
      catgName: 'Yumcha',
      name: 'Chicken Dim Sims',
      price: 2,
      qty: 1,
      img: 'chicken',
    },
    {
      id: 5,
      catId: 1,
      catgName: 'Yumcha',
      name: 'Pork & Prawn Siumai',
      price: 2.5,
      qty: 1,
      img: 'siumai',
    },
    {
      id: 10,
      catId: 2,
      catgName: 'Peking Duck',
      name: 'Peking Duck x2',
      searchKeys: [
        'Peking Duck x2',
        'Peking Duck',
        'Duck',
        'Peking',
        'x2',
        '2',
      ],
      price: 7,
      qty: 1,
      img: 'duck_x2',
    },
    {
      id: 11,
      catId: 2,
      catgName: 'Peking Duck',
      name: 'Peking Duck x4',
      searchKeys: [
        'Peking Duck x4',
        'Peking Duck',
        'Duck',
        'Peking',
        'x4',
        '4',
      ],
      price: 12,
      qty: 1,
      img: 'duck_x4',
    },
    {
      id: 12,
      catId: 2,
      catgName: 'Peking Duck',
      name: 'Peking Duck x6',
      searchKeys: [
        'Peking Duck x6',
        'Peking Duck',
        'Duck',
        'Peking',
        'x6',
        '6',
      ],
      price: 16,
      qty: 1,
      img: 'duck_x6',
    },
    {
      id: 20,
      catId: 3,
      catgName: 'Drinks',
      name: 'Water',
      searchKeys: [
        'water',
        'bottle',
        'drink',
        'drinks',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'water',
    },
    {
      id: 21,
      catId: 3,
      catgName: 'Drinks',
      name: 'Coke',
      searchKeys: [
        'coke',
        'can',
        'cans',
        'drink',
        'drinks',
        'soft drink',
        'soda',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'coke',
    },
    {
      id: 22,
      catId: 3,
      catgName: 'Drinks',
      name: 'Coke Zero',
      searchKeys: [
        'coke',
        'zero',
        'coke zero',
        'can',
        'cans',
        'drink',
        'drinks',
        'soft drink',
        'soda',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'cokez',
    },
    {
      id: 23,
      catId: 3,
      catgName: 'Drinks',
      name: 'Fanta',
      searchKeys: [
        'fanta',
        'can',
        'cans',
        'drink',
        'drinks',
        'soft drink',
        'soda',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'fanta',
    },

    {
      id: 24,
      catId: 3,
      catgName: 'Drinks',
      name: 'Sprite',
      searchKeys: [
        'sprite',
        'can',
        'cans',
        'drink',
        'drinks',
        'soft drink',
        'soda',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'sprite',
    },
    {
      id: 25,
      catId: 3,
      catgName: 'Drinks',
      name: 'Solo',
      searchKeys: [
        'solo',
        'can',
        'cans',
        'drink',
        'drinks',
        'soft drinks',
        'soft drink',
        'soda',
        'refreshment',
        'refreshments',
      ],
      price: 3,
      qty: 1,
      img: 'solo',
    },
    {
      id: 30,
      catId: 4,
      catgName: 'Entrees',
      name: 'Prawn Crackers',
      searchKeys: [
        'prawn crackers',
        'prawn',
        'prawns',
        'crackers',
        'chips',
        'prawn chips',
        'sides',
        'side',
      ],
      price: 3,
      qty: 1,
      img: 'crackers',
    },
  ];

  return (
    <Container className="">
      <NavBar />
      <MainPanel className="">
        <Menu
          className="menu"
          menuItems={menuItems}
          menuCategories={menuCategories}
        />
      </MainPanel>
    </Container>
  );
}

export default App;
