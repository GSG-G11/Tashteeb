import React, { useState } from 'react';
import {
  Modal, Button, Table,
} from 'antd';
import { PropTypes } from 'prop-types';

function DashProducts({ products }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'quantity',
      dataIndex: 'productOrder',
      key: 'quantity',
      render: (produdctOrder) => produdctOrder.quantity,
    },
    {
      title: 'Sub Total',
      key: 'sub total',
      render: (_, product) => product.price * product.productOrder.quantity,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <i className="ri-eye-fill" />
      </Button>
      <Modal title="Products" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Table columns={columns} dataSource={products} pagination={false} />
      </Modal>
    </>
  );
}
DashProducts.propTypes = {
  products: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
export default DashProducts;
