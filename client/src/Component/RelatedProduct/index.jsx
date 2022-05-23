import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import ProductCard from '../products/productCard';
import './style.css';

function RelatedProducts({ categoryId }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const datares = await axios.get(`/category/${categoryId}/products`, {
        cancelToken: source.token,
      });
      setInfo(datares.data.data);
    };
    fetchData();
    return () => source.cancel();
  }, []);
  return (
    <div className="related-products">
      {info && (
        <div className="RelatedProducts">
          <h4 className="Related-title"> Related Products </h4>
          <div className="RelatedProducts-container">
            {info && info.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                price={+item.price}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
RelatedProducts.propTypes = {
  categoryId: PropTypes.number.isRequired,
};

export default RelatedProducts;
