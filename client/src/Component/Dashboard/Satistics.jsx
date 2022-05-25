import React from 'react';
import CategoryChart from './chart/CategoryChart';
import OrderChart from './chart/OrderChart';
import Satisticsfetch from './chart/Satistics/Satistics';

function Satistics() {
  return (
    <>
      <Satisticsfetch />
      <OrderChart />
      <CategoryChart />
    </>
  );
}

export default Satistics;
