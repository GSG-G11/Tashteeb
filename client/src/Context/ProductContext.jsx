/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({});
  const [productID, setProductID] = useState('');
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        form,
        setForm,
        productID,
        setProductID,
        total,
        setTotal,
        pageSize,
        setPageSize,
        page,
        setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ProductProvider, Context };
