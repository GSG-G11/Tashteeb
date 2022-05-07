import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import './style.css';

function EngCard() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch('/api/engHome', {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setInfo(data.data))
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, []);
  return (
    // {id: 1, email: 'admin@admin.com', username: 'admin', password: 'admin', image: '
    <div className="containerCard">
      <div className="EngCardTitle">
        <h2>OUR TEAM</h2>
        <p>We Have A Team Of Amzining Engineers</p>
      </div>
      <div className="cardDetailes">
        {info.map((item) => <SingleCard key={item.id} img={item.image} name={item.username} />)}
      </div>
      <div className="cardBtn">
        <button type="button" className="btn">
          JOIN US !
        </button>
      </div>
    </div>
  );
}

export default EngCard;
