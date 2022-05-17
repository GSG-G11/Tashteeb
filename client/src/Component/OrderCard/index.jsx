import React from 'react';
import './orderCard.css';

function OrderCard() {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const exactTime = today.toLocaleTimeString();

  return (
    <div className="order__card">
      <ul>
        <li>
          <p>ORDER TIME</p>
          <div className="order__info">
            {date}
            {' '}
            At
            {' '}
            {exactTime}
          </div>
        </li>
        <li>
          <p>ENGINEER NAME</p>
          <div className="order__info">Abdullah Ahamad</div>
        </li>
        <li>
          <p>DETAILS</p>
          <div className="order__info">consultation and counseling</div>
        </li>
        <li>
          <p>TOTAL</p>
          <div className="order__info">$30/hr</div>
        </li>
        <li>
          <p>STATUS</p>
          <div className="order__status">Accepted</div>
        </li>
      </ul>
    </div>
  );
}

export default OrderCard;
