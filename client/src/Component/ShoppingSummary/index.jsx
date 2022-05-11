/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import axios from 'axios';
import './style.css';
import { Context } from '../../Context/shoppingSummary';

function ShoppingSummary() {
  const { totalPrice, cart, setCart } = useContext(Context);
  const checkout = async () => {
    await axios.post('/checkout', {
      products: cart,
    });
    setCart([]);
  };
  return (
    <div className="summary">
      <div className="shopSummary">
        <h3>Shopping Summary</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <span>Have a coupon code?</span>
        <div className="promoCode">
          <input type="text" placeholder="Enter param code here" />
          <button type="button">
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
      <div className="buy">
        <div className="subtotal">
          <span>Subtotal</span>
          <span className="num">${totalPrice}</span>
        </div>
        <div className="tax">
          <span>Tax</span>
          <span className="num">%25</span>
        </div>
        <hr />
        <div className="total">
          <span>Total</span>
          <span className="num">${totalPrice * 1.25}</span>
        </div>
        <button type="button" onClick={checkout} className="checkout-btn">CHECKOUT</button>
        <span className="confirm">Confirm Shopping</span>
      </div>

    </div>
  );
}

export default ShoppingSummary;
