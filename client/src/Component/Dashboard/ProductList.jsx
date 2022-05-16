import React from 'react';
import ProductTable from './Table';

function ProductList() {
  return (
    <section className="dashboard-product-list">
      <div className="add-product-btn">
        <button type="button"> add product</button>
      </div>
      <ProductTable />
    </section>
  );
}

export default ProductList;
