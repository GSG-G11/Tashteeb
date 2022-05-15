import React from 'react';

import { Table, Tag, Space } from 'antd';

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
    render: (category) => (
      <>
        {category.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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
    category: ['paints', 'constructions'],
  },
  {
    key: '13',
    name: 'red paint',
    price: 32,
    category: ['paints', 'constructions'],
  },
  {
    key: '133',
    name: 'red paint',
    price: 32,
    category: ['paints', 'constructions'],
  },
  {
    key: '61',
    name: 'red paint',
    price: 32,
    category: ['paints', 'constructions'],
  },
  {
    key: '2',
    name: 'corner',
    price: 42,
    category: ['decoration'],
  },
  {
    key: '3',
    name: ' Black',
    price: 32,
    category: ['decor', 'paints'],
  },
];

function ProductTable() {
  return <Table columns={columns} dataSource={data} />;
}

export default ProductTable;
