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

const SignupModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('hello world ibrahimos');
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
          placeHolder={'ENTER YOUR NAME'}
          prefix={<UserOutlined />}
          changeFunction={(e) => console.log(e.target.value)}
        />
        <Forminput
          name="Email"
          placeHolder={'Enter Your Email'}
          prefix={<UserOutlined />}
          changeFunction={(e) => console.log(e.target.value)}
        />
        <PasswordInput
          name="Password"
          placeHolder={'Enter Your Password'}
          show={<EyeTwoTone />}
          hide={<EyeInvisibleOutlined />}
          changeFunction={(e) => console.log(e.target.value)}
        />
        <Forminput
          name="image"
          placeHolder={'Enter Your Image Link'}
          prefix={<LinkOutlined />}
          changeFunction={(e) => console.log(e.target.value)}
        />
        <Form.Item
          label="Role"
          name="role"
        >
          <SelectInput changeFunction={(e) => console.log(e)} />
        </Form.Item>{' '}
        <Forminput
          name="Phone"
          placeHolder={'Enter Your Phone Number'}
          prefix={<TagsOutlined />}
          changeFunction={(e) => console.log(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default SignupModal;
