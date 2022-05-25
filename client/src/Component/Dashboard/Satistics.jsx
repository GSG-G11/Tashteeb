import React from 'react';
import CategoryChart from './chart/CategoryChart';
import OrderChart from './chart/OrderChart';
import Satisticsfetch from './chart/Satistics/Satistics';
import './style.css';

function Satistics() {
  return (
    <div className="chartHome">
      <Satisticsfetch />
      <div className="chartMain">
        <div className="orders">
          <h2> Orders </h2>
          <OrderChart />
        </div>
        <div className="category">
          <h2> Category </h2>
          <CategoryChart />
        </div>
      </div>
    </div>
  );
}

export default Satistics;
