import React, { useContext } from 'react';
import { Table, Space, Popconfirm } from 'antd';
import axios from 'axios';
import { Context } from '../../Context/ProductContext';
import UpdateModal from './UpdateModal';

const { Column } = Table;

function ProductTable() {
  const { products, setProducts } = useContext(Context);
  const deleteProduct = (id) => {
    axios.delete(`/products/${id}`).then(() => {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    });
  };

  return (
    <Table dataSource={products}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column
        title="Category"
        key="category"
        render={(item) => Object.entries(item).map(([key, value]) => (
          <p key={key}>{value.name}</p>
        ))}
      />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <UpdateModal data={record} title="Update Product " />
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => {
                deleteProduct(record.id);
              }}
            >
              <button
                type="button"
                className="dash-delete-icon"
                // onClick={() => deleteProduct(record.id)}
              >
                <i className="ri-delete-bin-7-line" />
              </button>
            </Popconfirm>
          </Space>
        )}
      />
    </Table>
  );
}

export default ProductTable;
