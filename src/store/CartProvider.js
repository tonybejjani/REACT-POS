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
  let updatedItems = state.items;
  let updatedTotalAmount = state.totalAmount + action.item.price;
  const itemToUpdateIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );

  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const itemExists = updatedItems[itemToUpdateIndex];

      if (itemExists) {
        const updateItemQty = itemExists.qty + 1;
        const itemUpdateResult = {
          ...itemExists,
          qty: updateItemQty,
          totalItemAmount: updateItemQty * itemExists.price,
        };

        updatedItems[itemToUpdateIndex] = itemUpdateResult;
      } else {
        updatedItems = [...state.items, action.item];
      }

      console.log(updatedTotalAmount);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case CART_ACTIONS.REMOVE_ITEM:
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
      updatedTotalAmount = state.totalAmount - action.item.totalItemAmount;

      console.log(updatedTotalAmount);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
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

  const removeItemFromCartHandler = (item) => {
    dispatchCartActions({ type: CART_ACTIONS.REMOVE_ITEM, item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
