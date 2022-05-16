import React from 'react';
import ProductTable from './Table';
import DashboardModal from './Modal';

function ProductList() {
  return (
    <section className="dashboard-product-list">
      <div className="add-product-btn">
        <DashboardModal title="Add Product " />
      </div>
      <ProductTable />
    </section>
  );
}

export default ProductList;
