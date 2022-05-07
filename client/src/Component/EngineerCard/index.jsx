import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import './style.css';

function EngCard() {
  const [info] = useState('');
  useEffect(() => {
    const abortController = new AbortController();
    fetch('/api/engHome', {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, [info]);
  return (
    <div className="containerCard">
      <div className="EngCardTitle">
        <h2>OUR TEAM</h2>
        <p>We Have A Team Of Amzining Engineers</p>
      </div>
      <div className="cardDetailes">
        <SingleCard />
        <SingleCard />
        <SingleCard />
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
