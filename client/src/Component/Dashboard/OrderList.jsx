import React, { useEffect, useContext } from 'react';
import { Table, Space, Typography } from 'antd';
import axios from 'axios';
import { Context } from '../../Context/ProductContext';
import DashProducts from '../Modal/dashProducts';

const { Title } = Typography;

function OrderList() {
  const { setOrders, orders } = useContext(Context);
  useEffect(() => {
    axios.get('/orders').then((res) => {
      setOrders(res.data.data);
      return res.data.data;
    });
  }, []);
  const columns = [
    {
      title: 'order id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (user) => user.username,
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'total',
    },
    {
      title: 'Order Date',
      key: 'createdAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'products',
      render: (products) => (
        <Space size="middle">
          <DashProducts products={products} />
        </Space>
      ),
    },
  ];
  return (
    <>
      <Title level={2}>Orders</Title>
      <Table columns={columns} dataSource={orders} pagination={false} />
    </>
  );
}

export default OrderList;
