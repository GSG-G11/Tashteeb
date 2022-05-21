import React, { useContext } from 'react';
import { Table, Space } from 'antd';
import { Context } from '../../Context/ProductContext';

const { Column } = Table;

function ProductTable() {
  const { products } = useContext(Context);
  return (
    <Table dataSource={products}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column
        title="Category"
        key="category"
        render={(item) => Object.entries(item).map(([key, value]) => (
          <p key={key.id}>{value.name}</p>
        ))}
      />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <button type="button" className="dash-update-icon">
              <i className="ri-edit-line" />
            </button>
            <button
              type="button"
              className="dash-delete-icon"
              onClick={() => console.log(record, text)}
            >
              <i className="ri-delete-bin-7-line" />
            </button>
          </Space>
        )}
      />
    </Table>
  );
}

export default ProductTable;
