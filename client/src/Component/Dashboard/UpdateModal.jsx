import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Form } from 'antd';
import UpdateProductModalContent from './UpdateModalContent';
import { Context } from '../../Context/ProductContext';
// import { success, error } from '../AntdMessages.jsx/messages';/
import './style.css';

function UpdateModal({ title, data }) {
  const {
    productID, setProductID, form, products, setProducts,
  } = useContext(Context);
  const updateProduct = (id) => {
    let newProducts;
    axios
      .patch(`/products/${id}`, form)
      .then((res) => {
        console.log(res);
        newProducts = products.filter((item) => item.id !== id);
        newProducts = [...newProducts, res.data.data];
        console.log(newProducts);
        setProducts(newProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isDashboardModalVisible, setIsDashboardModalVisible] = useState(false);
  const showDashboardModal = () => {
    setIsDashboardModalVisible(true);
  };

  const handleOk = () => {
    setIsDashboardModalVisible(false);
    updateProduct(productID);
  };

  const handleCancel = () => {
    setIsDashboardModalVisible(false);
  };

  return (
    <Form>
      <button
        type="button"
        className="dash-update-icon"
        onClick={() => {
          showDashboardModal();
          setProductID(data.id);
        }}
      >
        <i className="ri-edit-line" />
      </button>
      <Modal
        title={title}
        visible={isDashboardModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UpdateProductModalContent data={data} />
      </Modal>
    </Form>
  );
}

UpdateModal.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
};
export default UpdateModal;
