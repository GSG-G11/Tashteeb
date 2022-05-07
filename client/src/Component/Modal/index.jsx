import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';
import {
  UserOutlined,
  TagsOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { useAuth } from '../../Context/AuthContext';
import SelectInput from './Select';
import Forminput from './input';
import PasswordInput from './PasswordInput';
import './style.css';
import { success, error } from '../AntdMessages.jsx/messages';

function SignupModal() {
  const [data, setData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { register } = useAuth();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // console.log(data);
    if (data.email && data.password && data.username) {
      register(data)
        .then((res) => {
          success(res.message);
          setData({});
        })
        .catch((err) => {
          error(err.response.data.error.message);
        });
    } else {
      error('Please fill all the fields');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          changeFunction={(e) => setData({ ...data, username: e.target.value })}
        />
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
        <Forminput
          name="image"
          placeHolder="Enter Your Image Link"
          prefix={<LinkOutlined />}
          changeFunction={(e) => setData({ ...data, image: e.target.value })}
        />
        <Form.Item label="Role" name="role">
          <SelectInput changeFunction={(e) => setData({ ...data, role: e })} />

        </Form.Item>
        <Forminput
          name="Phone"
          placeHolder="Enter Your Phone Number"
          prefix={<TagsOutlined />}
          changeFunction={(e) => setData({ ...data, phone: e.target.value })}
        />
      </Modal>
    </Form>
  );
}

export default SignupModal;
