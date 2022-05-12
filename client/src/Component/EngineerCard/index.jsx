import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';
import './style.css';

function EngCard() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const dataAxios = await axios('/engHome', {
        cancelToken: source.token,
      });
      const { data } = dataAxios.data;
      setInfo(data);
    };
    fetchData();
    return () => source.cancel();
  }, []);
  return (
    <>
      <div className="containerCard">
        <div className="EngCardTitle">
          <h2>OUR TEAM</h2>
          <p>We Have A Team Of Amzining Engineers</p>
        </div>
        <div className="cardDetailes">
          {info.map((item) => (
            <SingleCard
              key={item.id}
              id={item.id}
              img={item.image}
              name={item.username}
            />
          ))}
        </div>
      </div>
      <div className="cardBtn">
        <Link to="/eng" className="btn">
          JOIN US !
        </Link>
      </div>
    </>
  );
}

export default EngCard;
