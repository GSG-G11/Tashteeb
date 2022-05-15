import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import axios from 'axios';
import EngineerBanner from '../../Component/EngineerBanner';
import ProductCard from '../../Component/products/productCard';
import Filter from '../../Component/Filters/Filter';
import './productsPage.css';
import CategoryFilter from '../../Component/Filters/CategoryFilter';
import SearchInput from '../../Component/SearchInput/SearchInput';

function ProdcutsPage() {
  const [q, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const [categoryName, setCateoryName] = useState('');
  const [categoryId, setCategoryId] = useState();
  const [sliderValue, setSliderValue] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [total, setTotal] = useState(); // how many products
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(2);

  const getAllCategories = () => {
    axios('/categories').then((res) => {
      const categoriesList = res.data.data;
      setAllCategories(categoriesList);
    });
  };

  const getCategorieName = (id) => {
    const names = allCategories.filter((cate) => cate.id === id);
    if (names.length) {
      setCateoryName(names[0].name);
    }
  };

  useEffect(() => {
    const getProducts = () => {
      axios(
        '/products',
        {
          params: {
            q,
            categoryId,
            minPrice: sliderValue[0],
            maxPrice: sliderValue[1],
            limit: pageSize,
            page,
          },
        },
      ).then((res) => {
        const data = res.data.product.rows;
        setProducts(data);
        getAllCategories();
        getCategorieName(categoryId);
        setTotal(res.data.product.count);
      });
    };
    getProducts();
  }, [q, sliderValue, categoryId, categoryName, page, pageSize]);

  const handleChange = (newPage, newPageSize) => {
    setPageSize(newPageSize);
    setPage(newPage);
  };

  const handlePriceFilter = (e) => {
    setSliderValue(e);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const handleCateorieCahnge = (e) => {
    setCategoryId(e);
  };

  const handleCategorieButtons = (e) => {
    setCategoryId(e.target.value);
    setCateoryName(e.target.textContent);
  };

  const clearCategories = () => {
    setCategoryId('');
  };
  return (
    <div>
      <EngineerBanner title="Shop" />

      <div className="products__page__body">
        <div className="products__sideBar">
          <h2>Filter By Price:</h2>
          <Filter handlePriceFilter={handlePriceFilter} />
          <CategoryFilter
            handleCateorieCahnge={handleCateorieCahnge}
            allCategories={allCategories}
            handleCategorieButtons={handleCategorieButtons}
            clearCategories={clearCategories}
            setCate
          />
        </div>

        <div className="products__right">
          <div className="category__and__search">
            <h1>{categoryName || 'Products'}</h1>
            <SearchInput placeHolder="Search Products" onSearch={onSearch} />
          </div>
          <div className="products__wrapper">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
          <div className="paginationEng">
            <Pagination
              className="pagGng"
              defaultCurrent={1}
              defaultPageSize={pageSize}
              showSizeChanger
              total={total}
              onChange={handleChange}
              pageSizeOptions={[6, 9, 12, 21]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdcutsPage;
