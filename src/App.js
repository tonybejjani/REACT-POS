/** @format */
import Container from './components/UI/Container';
import MainPanel from './components/UI/MainPanel';
import NavBar from './components/UI/NavBar';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavBar />
        <MainPanel>
          <Menu />
          <Cart />
        </MainPanel>
      </Container>
    </CartProvider>
  );
}

export default App;
