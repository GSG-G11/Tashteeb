import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Form } from 'antd';
import AddProductModalContent from './AddProductModalContent';
import { Context } from '../../Context/ProductContext';
import { success, error } from '../AntdMessages.jsx/messages';
import './style.css';

function UpdateModal({ title }) {
  const { form, products, setProducts } = useContext(Context);
  const [isDashboardModalVisible, setIsDashboardModalVisible] = useState(false);
  const showDashboardModal = () => {
    setIsDashboardModalVisible(true);
  };

  const handleOk = () => {
    setIsDashboardModalVisible(false);
    axios
      .post('/products', form)
      .then((res) => {
        success('Product added successfully');
        setProducts([...products, res.data]);
      })
      .catch(() => {
        error('Error adding product');
        setIsDashboardModalVisible(true);
      });
  };

  const handleCancel = () => {
    setIsDashboardModalVisible(false);
  };

  return (
    <Form>

      <button
        type="button"
        className="dash-update-icon"
        onClick={showDashboardModal}
      >
        <i className="ri-edit-line" />
      </button>
      <Modal
        title={title}
        visible={isDashboardModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddProductModalContent />
      </Modal>
    </Form>
  );
}

UpdateModal.propTypes = {
  title: PropTypes.string.isRequired,
};
export default UpdateModal;
