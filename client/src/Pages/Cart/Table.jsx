/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import CartRow from '../../Component/CartRow';

function Table() {
  const [cart, setCart] = useState([]);

  const setQuantity = (id, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };
  useEffect(() => {
    const lsCart = JSON.parse(localStorage.getItem('cart'));
    if (lsCart) {
      setCart(lsCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <table>
      <thead>
        <tr className="spaceUnder">
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {cart.map(({
          id, name, img, price, quantity,
        }) => (
          <CartRow
            key={id}
            id={id}
            name={name}
            img={img}
            price={price}
            quantity={quantity}
            setQuantity={setQuantity}
            deleteItem={deleteItem}
          />
        )) }
        <CartRow
          img="https://i.pravatar.cc/300?img=1"
          name="hummer with nails"
          price={80.33}
          quantity={2}
          setQuantity={setQuantity}
          id={1}
          deleteItem={deleteItem}
        />
        <CartRow
          img="https://i.pravatar.cc/300?img=1"
          name="hummer with nails"
          price={80.33}
          quantity={2}
          setQuantity={setQuantity}
          id={2}
          deleteItem={deleteItem}
        />
      </tbody>
    </table>
  );
}

export default Table;
