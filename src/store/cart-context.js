/** @format */

import React from 'react';
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  paymentType: 'EFT',
  addItem: (item) => {},
  removeItem: (id) => {},
  changePaymentType: (type) => {},
});

export default CartContext;
