import React from 'react';
import EngineerBanner from '../../Component/EngineerBanner';
import ProductCard from '../../Component/products/productCard';
import Filter from '../../Component/Filters/Filter';
import './productsPage.css';
import CategoryFilter from '../../Component/Filters/CategoryFilter';

function ProdcutsPage() {
  return (
    <div>
      <EngineerBanner title="Shop" />

      <div className="products__page__body">
        <div className="products__sideBar">
          <h2>Filter By Price:</h2>
          <Filter />
          <CategoryFilter />
        </div>

        <div className="products__right">
          <div className="products__wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProdcutsPage;
