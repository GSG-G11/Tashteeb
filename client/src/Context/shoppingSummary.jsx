/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const Context = createContext();
const cartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{
      totalPrice, setTotalPrice, cart, setCart,
    }}
    >
      {children}
    </Context.Provider>
  );
};

export default cartProvider;
export { Context };
