/** @format */
import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  paymentType: 'EFT',
};

const CART_ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  CHANGE_PAYMENT_TYPE: 'change-payment-type',
};

const cartReducer = (state, action) => {
  let updatedItems = state.items;
  let updatedTotalAmount = state.totalAmount;
  let updatedPaymentType = state.paymentType;

  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const itemToUpdateIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

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

      updatedTotalAmount = state.totalAmount + action.item.price;
      console.log(updatedPaymentType);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        paymentType: updatedPaymentType,
      };

    case CART_ACTIONS.REMOVE_ITEM:
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
      updatedTotalAmount = state.totalAmount - action.item.totalItemAmount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        paymentType: updatedPaymentType,
      };

    case CART_ACTIONS.CHANGE_PAYMENT_TYPE:
      console.log(action.payType);
      updatedPaymentType = action.payType;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        paymentType: updatedPaymentType,
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

  const changePaymentTypeHandler = (payType) => {
    dispatchCartActions({ type: CART_ACTIONS.CHANGE_PAYMENT_TYPE, payType });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    paymentType: cartState.paymentType,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    changePaymentType: changePaymentTypeHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
