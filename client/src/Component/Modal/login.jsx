import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,

} from '@ant-design/icons';
import Forminput from './input';
import PasswordInput from './PasswordInput';
import './style.css';

function loginModal() {
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

  return (
    <>
      <Button
        type="primary"
        style={{
          marginTop: '25px',
          backgroundColor: 'transparent',
          borderRadius: ' 5px',
          border: ' 1px solid #EDB820',
          color: '#EDB820',
          fontWeight: ' 500',
          transition: 'all 1s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px',
        }}
        className="login-btn"
        onClick={showModal}
      >
        Log In
      </Button>
      <Modal
        title="Log In"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Forminput
          name="Email"
          placeHolder="Enter Your Email"
          prefix={<UserOutlined />}
          changeFunction={() => {}}
        />
        <PasswordInput
          name="Password"
          placeHolder="Enter Your Password"
          show={<EyeTwoTone />}
          hide={<EyeInvisibleOutlined />}
          changeFunction={() => {}}
        />
      </Modal>
    </>
  );
}

export default loginModal;
