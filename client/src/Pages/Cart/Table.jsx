/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useContext } from 'react';
import CartRow from '../../Component/CartRow';
import { Context } from '../../Context/shoppingSummary';

function Table() {
  const { setTotalPrice, cart, setCart } = useContext(Context);

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
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
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
          img="https://media.istockphoto.com/photos/hummer-and-nails-picture-id1213092931"
          name="hummer with nails"
          price={80.33}
          quantity={2}
          setQuantity={setQuantity}
          id={1}
          deleteItem={deleteItem}
        />
        <CartRow
          img="https://media.istockphoto.com/photos/hummer-and-nails-picture-id1213092931"
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
