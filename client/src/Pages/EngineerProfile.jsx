import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailes from '../Component/ProductDetailes';

function EngineerProfile() {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const datares = await axios.get(`/engineers/${id}`, {
        cancelToken: source.token,
      });
      setInfo(datares.data.user);
    };
    fetchData();
    return () => source.cancel();
  }, []);
  return (
    <ProductDetailes
      isProduct={false}
      name={info.username}
      img={info.image}
      price={info.hourPrice}
      phone={info.phone}
      id={id}
    />
  );
}

export default EngineerProfile;
