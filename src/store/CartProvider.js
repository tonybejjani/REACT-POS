/** @format */
import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  paymentType: 'EFT',
  activateSubmit: false,
};

const CART_ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  CHANGE_PAYMENT_TYPE: 'change-payment-type',
};

const cartReducer = (state, action) => {
  let updateItems = state.items;
  let updateTotalAmount = state.totalAmount;
  let updatePaymentType = state.paymentType;
  let updateActivateSubmit = state.activateSubmit;

  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const itemToUpdateIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const itemExists = updateItems[itemToUpdateIndex];

      if (itemExists) {
        const updateItemQty = itemExists.qty + 1;
        const itemUpdateResult = {
          ...itemExists,
          qty: updateItemQty,
          totalItemAmount: updateItemQty * itemExists.price,
        };

        updateItems[itemToUpdateIndex] = itemUpdateResult;
      } else {
        updateItems = [...state.items, action.item];
      }

      updateTotalAmount = state.totalAmount + action.item.price;

      updateItems.length > 0
        ? (updateActivateSubmit = true)
        : (updateActivateSubmit = false);
      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
        paymentType: updatePaymentType,
        activateSubmit: updateActivateSubmit,
      };

    case CART_ACTIONS.REMOVE_ITEM:
      updateItems = state.items.filter((item) => item.id !== action.item.id);
      updateTotalAmount = state.totalAmount - action.item.totalItemAmount;

      updateItems.length > 0
        ? (updateActivateSubmit = true)
        : (updateActivateSubmit = false);

      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
        paymentType: updatePaymentType,
        activateSubmit: updateActivateSubmit,
      };

    case CART_ACTIONS.CHANGE_PAYMENT_TYPE:
      console.log(action.payType);
      updatePaymentType = action.payType;

      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
        paymentType: updatePaymentType,
        activateSubmit: updateActivateSubmit,
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
    activateSubmit: cartState.activateSubmit,
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
