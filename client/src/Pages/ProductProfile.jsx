import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailes from '../Component/ProductDetailes';

function ProductProfile() {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchdata = async () => {
      const dataResponse = await axios(`/products/${id}`, {
        cancelToken: source.token,
      });
      setInfo(dataResponse.data.data);
    };
    fetchdata();
    return () => source.cancel();
  });
  return (
    <ProductDetailes
      isProduct
      id={info.id}
      description={info.description}
      name={info.name}
      price={info.price}
      img={info.image}
    />
  );
}

export default ProductProfile;
