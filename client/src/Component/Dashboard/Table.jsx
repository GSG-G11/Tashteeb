import React, { useEffect, useState } from 'react';

import { Table, Space } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: (item) => Object.values(item)[1],
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <button type="button" className="dash-update-icon">
          <i className="ri-edit-line" />
        </button>
        <button type="button" className="dash-delete-icon">
          <i className="ri-delete-bin-7-line" />
        </button>
      </Space>
    ),
  },
];

function ProductTable() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/products').then((res) => {
      setProducts(res.data.product);
    });
  }, []);
  return <Table columns={columns} dataSource={Products} />;
}

export default ProductTable;
