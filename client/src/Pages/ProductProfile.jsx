import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailes from '../Component/ProductDetailes';
import RelatedProducts from '../Component/RelatedProduct';
import Navbar from '../Component/Navbar';

function ProductProfile() {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  const [catrgorgID, setcatrgorgID] = useState(null);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchdata = async () => {
      const dataResponse = await axios(`/products/${id}`, {
        cancelToken: source.token,
      });
      setInfo(dataResponse.data.data);
      setcatrgorgID(dataResponse.data.data.categoryId);
    };
    fetchdata();
    return () => source.cancel();
  }, [id]);
  return (
    <>
      <div className="eng-navbar-section">
        <Navbar transparent={false} />
      </div>
      {info && (
      <ProductDetailes
        isProduct
        id={info.id}
        description={info.description}
        name={info.name}
        price={info.price}
        img={info.image}
      />
      )}
      {catrgorgID && <RelatedProducts categoryId={catrgorgID} /> }
    </>
  );
}

export default ProductProfile;
