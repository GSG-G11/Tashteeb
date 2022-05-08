import React, { useEffect, useState } from 'react';
import SingleCard from '../EngineerCard/SingleCard';
import '../EngineerCard/style.css';
import './style.css';

function EngineerInfo() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch('/api/engPage', {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setInfo(data.data.rows))
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }, []);
  return (
    <div className="cardDetailes engineerInfo">
      {info.map((item) => <SingleCard key={item.id} name={item.username} img={item.image} />)}
    </div>
  );
}

export default EngineerInfo;
