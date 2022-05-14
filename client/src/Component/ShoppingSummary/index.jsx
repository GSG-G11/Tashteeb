/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import './style.css';
import { Context } from '../../Context/shoppingSummary';
import { user } from '../../Context/AuthContext';

const ReachableContext = React.createContext();

const empty = {
  title: 'Cart is empty!',
  content: (
    <ReachableContext.Consumer>Please add some items to your cart before checkouting.</ReachableContext.Consumer>

  ),
};
const notLoggedIn = {
  title: 'Not Logged in!',
  content: (
    <ReachableContext.Consumer>Please log in to checkout</ReachableContext.Consumer>
  ),
};

function ShoppingSummary() {
  const { totalPrice, cart, setCart } = useContext(Context);
  const confirmCheckout = {
    title: 'Confirm Purchasing!',
    content: (
      <ReachableContext.Consumer>Are you sure about these items?</ReachableContext.Consumer>
    ),
    okText: 'Yes',
    cancelText: 'No',
    onOk: async () => {
      const data = {
        products: cart,
      };
      const response = await axios.post('/api/checkout', data);
      if (response.data.success) {
        setCart([]);
      }
    },
  };
  const [modal, contextHolder] = Modal.useModal();
  const checkout = () => {
    if (cart.length === 0) {
      modal.warning(empty);
    } else if (!user) {
      modal.warning(notLoggedIn);
    } else {
      modal.confirm(confirmCheckout);
    }
  };
  return (
    <ReachableContext.Provider value="Light">
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
      {contextHolder}

    </ReachableContext.Provider>
  );
}

export default ShoppingSummary;
