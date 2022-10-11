/** @format */
import Container from './components/UI/Container';
import MainPanel from './components/UI/MainPanel';
import NavBar from './components/UI/NavBar';
import Menu from './components/UI/MenuUI/Menu';

function App() {
  const menuItems = [
    {
      id: 1,
      catgId: 1,
      catgName: 'Yumcha',
      name: 'Pork Soup Dumpling',
      price: 2.0,
      qty: 1,
      img: 'xlb',
    },
    {
      id: 2,
      catgId: 1,
      catgName: 'Yumcha',
      name: 'Prawn Dumpling',
      price: 2.5,
      qty: 1,
      img: 'hargow',
    },
    {
      id: 3,
      catgId: 1,
      catgName: 'Yumcha',
      name: 'BBQ Pork Buns',
      price: 3,
      qty: 1,
      img: 'buns',
      special_deal_limit: 2,
    },
    {
      id: 4,
      catgId: 1,
      catgName: 'Yumcha',
      name: 'Chicken Dim Sims',
      price: 2,
      qty: 1,
      img: 'chicken',
    },
    {
      id: 5,
      catgId: 1,
      catgName: 'Yumcha',
      name: 'Pork & Prawn Siumai',
      price: 2.5,
      qty: 1,
      img: 'siumai',
    },
  ];

  return (
    <Container className="">
      <NavBar />
      <MainPanel className="">
        <Menu className="" menuItems={menuItems} />
      </MainPanel>
    </Container>
  );
}

export default App;
