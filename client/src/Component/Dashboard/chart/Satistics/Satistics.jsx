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
        user: {
          count: getData.data.data.user,
          icon: <UserOutlined />,
        },
        order: {
          count: getData.data.data.order,
          icon: <ShoppingOutlined />,
        },
        productOrder: {
          count: getData.data.data.productOrder,
          icon: <ShoppingCartOutlined />,
        },
        product: {
          count: getData.data.data.product,
          icon: <SkinOutlined />,
        },
        hiringOrder: {
          count: getData.data.data.hiringOrder,
          icon: <PullRequestOutlined />,
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
