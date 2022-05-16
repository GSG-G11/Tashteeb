/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style.css';

function CartRow({
  img, name, price, quantity, setQuantity, id, deleteItem,
}) {
  return (
    <tr>
      <td>
        <img src={img} alt="" />
        <h3 className="cart-product-name">{name}</h3>
      </td>
      <td>
        <div className="qunatity-inputs">
          <input
            type="button"
            value="-"
            className="cart-quantity-button"
            onClick={() => setQuantity(id, quantity - 1)}
          />
          <div className="cart-quantity-input"><p>{quantity}</p></div>
          <input
            type="button"
            value="+"
            className="cart-quantity-button"
            onClick={() => setQuantity(id, quantity + 1)}
          />
        </div>
      </td>
      <td>
        <h6>${price.toFixed(1)}</h6>
      </td>
      <td>
        <h6>${(price * quantity).toFixed(1)}</h6>
      </td>
      <td>
        <DeleteTwoTone twoToneColor="#eb2f96" style={{ 'font-size': 20 }} onClick={() => deleteItem(id)} />
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartRow;
