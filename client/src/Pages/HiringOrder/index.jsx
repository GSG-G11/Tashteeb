import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Component/Navbar';
// import Footer from '../../Component/footer/Footer';
import { useAuth } from '../../Context/AuthContext';
import OrderCard from '../../Component/OrderCard';
import './style.css';

export default function HiringOrder() {
  const { user } = useAuth();
  const [rerender, setRerender] = useState(false);
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      const fetchData = async () => {
        const dataAxios = await axios(user.role === 1 ? '/hiringOrder/engineer' : '/hiringOrder', {
          cancelToken: source.token,
        });
        const { data: { userHiringOrder } } = dataAxios;
        setOrders(userHiringOrder);
        setLoading(false);
      };
      fetchData();
      return () => source.cancel();
    }
    return () => {};
  }, [user, rerender]);

  return (
    <>
      <div className="eng-navbar-section">
        <Navbar transparent={false} />
      </div>
      {orders.length === 0 ? (
        <h1 className="ptag">there is no orders for you yet</h1>
      ) : (
        <div className="hiring-order">
          <div className="hiring-order-container">
            {orders.map((item) => (
              <OrderCard
                key={item.id}
                id={item.id}
                status={item.status}
                details={item.description}
                price={item.price}
                time={item.createdAt}
                reply={item.reply}
                name={
                user.role === 1
                  ? item.userHiringOrder.username
                  : item.engHiringOrder.username
              }
                isEngineer={user.role === 1}
                setRerender={setRerender}
                rerender={rerender}
              />
            ))}
          </div>
        </div>
      )}

    </>
  );
}
