import React, { useEffect } from 'react';

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

const data = [
  {
    key: '1',
    name: 'red paint',
    price: 32,
    category: {
      id: 1,
      name: 'paints',
    },
  },
  {
    key: '13',
    name: 'red paint',
    price: 32,
    category: {
      id: 1,
      name: 'paints',
    },
  },
  {
    key: '133',
    name: 'red paint',
    price: 32,
    category: {
      id: 1,
      name: 'paints',
    },
  },
  {
    key: '61',
    name: 'red paint',
    price: 32,
    category: {
      id: 1,
      name: 'paints',
    },
  },
  {
    key: '2',
    name: 'corner',
    price: 42,
    category: {
      id: 1,
      name: 'paints',
    },
  },
  {
    key: '3',
    name: ' Black',
    price: 32,
    category: {
      id: 1,
      name: 'paints',
    },
  },
];

function ProductTable() {
  const [dataSource, setDataSource] = React.useState([]);
  useEffect(() => {
    axios.get('/products').then((res) => {
      setDataSource(res.data.product);
    });
  }, []);
  console.log(dataSource, 'dataSource');
  return <Table columns={columns} dataSource={data} />;
}

export default ProductTable;
