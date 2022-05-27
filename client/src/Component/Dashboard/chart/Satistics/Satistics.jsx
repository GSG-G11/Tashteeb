import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PullRequestOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  SkinOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Card from './Card';

function Satisticsfetch() {
  const [data, setData] = useState({});
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchEng = async () => {
      const getData = await axios.get('/satistics', {
        cancelToken: source.token,
      });
      const datasatistics = {
        users: {
          count: getData.data.data.user,
          icon: (
            <UserOutlined className="iconChart" style={{ color: '#EDB820' }} />
          ),
        },
        orders: {
          count: getData.data.data.order,
          icon: (
            <ShoppingOutlined
              className="iconChart"
              style={{ color: '#EDB820' }}
            />
          ),
        },
        engineers: {
          count: getData.data.data.engineer,
          icon: (
            <ShoppingCartOutlined
              className="iconChart"
              style={{ color: '#EDB820' }}
            />
          ),
        },
        products: {
          count: getData.data.data.product,
          icon: (
            <SkinOutlined className="iconChart" style={{ color: '#EDB820' }} />
          ),
        },
        hirings: {
          count: getData.data.data.hiringOrder,
          icon: (
            <PullRequestOutlined
              className="iconChart"
              style={{ color: '#EDB820' }}
            />
          ),
        },
      };
      setData(datasatistics);
    };
    fetchEng();
    return () => source.cancel();
  }, []);
  return (
    <Card statistics={data} />
  );
}

export default Satisticsfetch;
