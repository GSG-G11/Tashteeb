import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Form } from 'antd';
import AddProductModalContent from './AddProductModalContent';
import { Context } from '../../Context/ProductContext';
import { success, error } from '../AntdMessages.jsx/messages';
import './style.css';

function DashboardModal({ title }) {
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
      <Button
        type="primary"
        style={{
          marginTop: '25px',
          backgroundColor: '#EDB820',
          borderRadius: ' 5px',
          border: ' 1px solid #EDB820',
          color: '#fff',
          fontWeight: ' 500',
          transition: 'all 1s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px ',
        }}
        className="signup-btn"
        onClick={showDashboardModal}
      >
        {title}
      </Button>
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

DashboardModal.propTypes = {
  title: PropTypes.string.isRequired,
};
export default DashboardModal;
