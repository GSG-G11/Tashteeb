import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailes from '../Component/ProductDetailes';
import Navbar from '../Component/Navbar';

function EngineerProfile() {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const datares = await axios.get(`/api/v1/engineers/${id}`, {
        cancelToken: source.token,
      });
      setInfo(datares.data.user);
    };
    fetchData();
    return () => source.cancel();
  }, []);
  console.log(info);
  return (
    <div>
      <div className="eng-navbar-section">
        <Navbar transparent={false} />
      </div>
      {info && (
      <ProductDetailes
        isProduct={false}
        name={info.username}
        img={info.image}
        hourPrice={info.hourPrice}
        phone={info.phone}
        bio={info.bio}
        id={+id}
      />
      ) }
    </div>
  );
}

export default EngineerProfile;
