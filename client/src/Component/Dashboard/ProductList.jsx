import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import ProductTable from './Table';
import DashboardModal from './Modal';
import { Context } from '../../Context/ProductContext';

function ProductList() {
  const {
    setProducts,
    setTotal,
    pageSize,
    page,
  } = useContext(Context);

  useEffect(() => {
    axios
      .get('/api/v1/products', {
        params: {
          page,
          limit: pageSize,
        },
      })
      .then((res) => {
        const result = res.data.product.rows.map((item) => {
          const {
            id, name, price, category, description,
          } = item;
          return {
            key: id,
            id,
            name,
            price,
            category,
            description,
          };
        });
        setProducts(result);
        setTotal(res.data.product.count);
      });
  }, [page, pageSize]);
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
