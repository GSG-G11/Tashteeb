import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderCard from '../../Component/OrderCard';
import './style.css';

export default function HiringOrder() {
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchData = async () => {
      const dataAxios = await axios('/hiringOrder', {
        cancelToken: source.token,
      });
      const { data: { userHiringOrder } } = dataAxios;
      setOrders(userHiringOrder);
      setLoading(false);
    };
    fetchData();
    return () => source.cancel();
  }, []);
  return (
    <div>
      <div className="hiring-order-container">
        { orders.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            details={item.description}
            name={item.engHiringOrder.username}
            price={item.price}
            status={item.status}
            time={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
