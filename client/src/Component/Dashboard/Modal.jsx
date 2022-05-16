import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'antd';
import AddProductModalContent from './AddProductModalContent';

import './style.css';

function DashboardModal({ title }) {
  const [isDashboardModalVisible, setIsDashboardModalVisible] = useState(false);
  const showDashboardModal = () => {
    setIsDashboardModalVisible(true);
  };

  const handleOk = () => {
    setIsDashboardModalVisible(false);
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
