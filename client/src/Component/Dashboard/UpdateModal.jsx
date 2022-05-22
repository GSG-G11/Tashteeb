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
    productID, setProductID, form, products, setProducts, setForm,
  } = useContext(Context);

  const updateProduct = (id) => {
    let newProducts;
    axios
      .patch(`/products/${id}`, form)
      .then((res) => {
        newProducts = products.filter((item) => item.id !== id);
        const product = res.data.data;
        console.log(product);
        newProducts = [...newProducts, product];
        setProducts(newProducts);
        setForm({});
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
    setForm({});
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
  data: PropTypes.shape({
    key: PropTypes.number,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    categoryId: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};
export default UpdateModal;
