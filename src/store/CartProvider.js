/** @format */
import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CART_ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      return {
        items: [...state.items, action.item],
        totalAmount: state.totalAmount + action.item.price,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartActions({ type: CART_ACTIONS.ADD_ITEM, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartActions({ type: CART_ACTIONS.REMOVE_ITEM, id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  console.log(cartState);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
