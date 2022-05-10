import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetailes from '../Component/ProductDetailes';
// email: "enghefsdfdslles@helles.com"
// engId: null
// hourPrice: 0
// id: 3
// image: "http://themesflat.com/html/nah/images/member/2t1.png"
// password: "123456"
// phone: "+20100100100"
// role: 1
// updatedAt: "2022-05-09T08:11:58.858Z"
// userId: null
// username: "enghelfdsfdles"

// isProduct = false,
// // name,
// // description,
// // img,
// // price,

function EngineerProfile() {
  const { id } = useParams();
  const [info, setInfo] = useState('');
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const datares = await axios.get(`/api/eng/${id}`, {
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
    />
  );
}

export default EngineerProfile;
