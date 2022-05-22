import React from 'react';
import PropTypes from 'prop-types';
import './orderCard.css';

function OrderCard({
  time, name, details, price, status,
}) {
  let bgColor = '#F29339';
  if (status === 'accepted') {
    bgColor = '#008000';
  } else if (status === 'rejected') {
    bgColor = '#FF0000';
  } else if (status === 'completed') {
    bgColor = '#125b50';
  }
  return (
    <div className="order__card">
      <ul>
        <li>
          <p>ORDER TIME</p>
          <div className="order__info">
            {' '}
            {time}
            {' '}
          </div>
        </li>
        <li>
          <p>ENGINEER NAME</p>
          <div className="order__info">{name}</div>
        </li>
        <li>
          <p>DETAILS</p>
          <div className="order__info">{details}</div>
        </li>
        <li>
          <p>TOTAL</p>
          <div className="order__info">
            $
            {price}
          </div>
        </li>
        <li>
          <p>STATUS</p>
          <div className="order__status" style={{ backgroundColor: bgColor }}>{status}</div>
        </li>
      </ul>
    </div>
  );
}
OrderCard.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;
