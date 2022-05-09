import React from 'react';
import './style.css';

function ShoppingSummary() {
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
          <span className="num">$ 83,92</span>
        </div>
        <div className="tax">
          <span>Tax</span>
          <span className="num">% 25</span>
        </div>
        <hr />
        <div className="total">
          <span>Total</span>
          <span className="num">$86,27</span>
        </div>
        <button type="button" className="checkout-btn">CHECKOUT</button>
        <span className="confirm">Confirm Shopping</span>
      </div>

    </div>
  );
}

export default ShoppingSummary;
