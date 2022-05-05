import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';

import {
  UserOutlined,
  TagsOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import SelectInput from './Select';
import Forminput from './input';
import PasswordInput from './PasswordInput';
import './style.css';

function SignupModal() {
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
        onClick={showModal}
      >
        Sign Up
      </Button>
      <Modal
        title="Sign Up"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Forminput
          name="Name"
          placeHolder="ENTER YOUR NAME"
          prefix={<UserOutlined />}
          changeFunction={() => {}}
        />
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
        <Forminput
          name="image"
          placeHolder="Enter Your Image Link"
          prefix={<LinkOutlined />}
          changeFunction={() => {}}
        />
        <Form.Item label="Role" name="role">
          <SelectInput />
        </Form.Item>
        <Forminput
          name="Phone"
          placeHolder="Enter Your Phone Number"
          prefix={<TagsOutlined />}
          changeFunction={() => {}}
        />
      </Modal>
    </>
  );
}

export default SignupModal;
