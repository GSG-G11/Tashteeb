import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import axios from 'axios';
import EngineerBanner from '../../Component/EngineerBanner';
import Filter from '../../Component/Filters/Filter';
import './productsPage.css';
import CategoryFilter from '../../Component/Filters/CategoryFilter';
import SearchInput from '../../Component/SearchInput/SearchInput';
import ProductCard from '../../Component/products/productCard';
import { error } from '../../Component/AntdMessages.jsx/messages';

function ProdcutsPage() {
  const [q, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const [categoryName, setCateoryName] = useState('');
  const [categoryId, setCategoryId] = useState();
  const [sliderValue, setSliderValue] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [total, setTotal] = useState(); // how many products
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(false);

  const getCategorieName = (id) => {
    const names = allCategories.filter((cate) => cate.id === id);
    if (names.length) {
      setCateoryName(names[0].name);
    }
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await axios('/products?', {
          params: {
            q,
            categoryId,
            minPrice: sliderValue[0],
            maxPrice: sliderValue[1],
            limit: pageSize,
            page,
          },
        });
        const data = productData.data.product.rows;
        setProducts(data);
        setTotal(productData.data.product.count);
      } catch (errr) {
        setErr(true);
      }
    };

    const getAllCategories = async () => {
      try {
        const getCategories = await axios('/categories');
        const categoriesList = getCategories.data.data;
        setAllCategories(categoriesList);
      } catch (errr) {
        error('Faild to load categories please refresh the page');
      }
    };
    getProducts();
    getAllCategories();
    getCategorieName(categoryId);
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
            err={err}
          />
        </div>

        <div className="products__right">
          <div className="category__and__search">
            <h1>{categoryName || 'Products'}</h1>
            <SearchInput placeHolder="Search Products" onSearch={onSearch} />
          </div>
          <div className="products__wrapper">
            {err
              ? error('Faild to load please try again later.')
              : products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={+product.price}
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
