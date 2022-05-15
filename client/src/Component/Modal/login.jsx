/* eslint-disable max-len */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { useAuth } from '../../Context/AuthContext';

import Forminput from './input';
import PasswordInput from './PasswordInput';
import './style.css';
import { success, error } from '../AntdMessages.jsx/messages';

function loginModal() {
  const { login } = useAuth();
  const [data, setData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (data.email && data.password) {
      login(data)
        .then((res) => {
          success(res.message);
          setData({});
        })
        .catch((err) => {
          error(err.response.data.error ? err.response.data.error.message : err.response.data.message);
        });
    } else {
      error('Please fill all the fields');
    }
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
      <Modal title="Log In" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Forminput
          name="Email"
          placeHolder="Enter Your Email"
          prefix={<UserOutlined />}
          changeFunction={(e) => setData({ ...data, email: e.target.value })}
        />
        <PasswordInput
          name="Password"
          placeHolder="Enter Your Password"
          show={<EyeTwoTone />}
          hide={<EyeInvisibleOutlined />}
          changeFunction={(e) => setData({ ...data, password: e.target.value })}
        />
      </Modal>
    </>
  );
}

export default loginModal;
