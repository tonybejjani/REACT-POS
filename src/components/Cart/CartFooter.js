/** @format */

import React, { Fragment, useContext } from 'react';
import CartContext from '../../store/cart-context';
import './CartFooter.css';

const CartFooter = () => {
  const cartCtx = useContext(CartContext);

  const paymentTypeHandler = (e) => {
    cartCtx.changePaymentType(e.target.value);
  };

  console.log(cartCtx.paymentType);
  return (
    <Fragment>
      <div className="menu-sidebar__transaction">
        <div className="menu-sidebar__transaction-total">
          <p className="menu-sidebar__transaction-total-title">Sub total</p>
          <p className="menu-sidebar__transaction-total-price">
            $ <span>{cartCtx.totalAmount.toFixed(2)}</span>
          </p>
        </div>
        <div className="menu-sidebar__transaction-note">
          <textarea rows="1" placeholder=" Order Note..."></textarea>
        </div>
        <div className="menu-sidebar__transaction-pay">
          <button
            type="button"
            value="EFT"
            onClick={paymentTypeHandler}
            className={`menu-sidebar__transaction-pay-btn menu-sidebar__transaction-pay__credit ${
              cartCtx.paymentType === 'EFT'
                ? 'menu-sidebar__transaction-btn--active'
                : ''
            }`}
          >
            Credit Card
          </button>
          <button
            type="button"
            value="cash"
            onClick={paymentTypeHandler}
            className={`menu-sidebar__transaction-pay-btn menu-sidebar__transaction-pay__cash ${
              cartCtx.paymentType === 'cash'
                ? 'menu-sidebar__transaction-btn--active'
                : ''
            }`}
          >
            Cash
          </button>
        </div>
      </div>

      {/* <div className="menu-sidebar__footer">
        <button type="button" className="menu-sidebar__footer-save-btn hidden">
          Save Order
        </button>
        <button
          type="button"
          className="menu-sidebar__footer-submit-btn disabled"
        >
          Submit Order
        </button>
      </div> */}
    </Fragment>
  );
};

export default CartFooter;
