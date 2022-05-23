/* eslint-disable max-len */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import {
  Modal, Button, Form, Input,
} from 'antd';
import PropTypes from 'prop-types';
import {
  UserOutlined,
  TagsOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { useAuth } from '../../Context/AuthContext';
import SelectInput from './Select';
import Forminput from './input';
import PasswordInput from './PasswordInput';
import './style.css';
import { success, error } from '../AntdMessages.jsx/messages';

function SignupModal({ title }) {
  const [data, setData] = useState({ role: 0 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEngineer, setIsEngineer] = useState(false);
  const { register } = useAuth();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
        {title}
      </Button>
      <Modal
        title={title}
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
        {/* <Forminput
          name="image"
          placeHolder="Enter Your Image Link"
          prefix={<LinkOutlined />}
          changeFunction={(e) => setData({ ...data, image: e.target.value })}
        /> */}
        <div className="imageSignup-container">
          <p className="imageSignup"> Image : </p>
          {/* <Upload
            type="pictures"
            accept=".jpg,.png,.png"
            onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.file);
              reader.onload = () => {
                setData({ ...data, image: reader.result });
              };
            }}
          >
            <Button className="imageSignupBtn" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload> */}
          <input
            type="file"
            onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = () => {
                setData({ ...data, image: reader.result });
              };
            }}
          />
        </div>
        <Form.Item label="Role" name="role">
          <SelectInput
            changeFunction={(e) => { setData({ ...data, role: e }); setIsEngineer(e == 1); }}
          />

        </Form.Item>
        <Forminput
          name="Phone"
          placeHolder="Enter Your Phone Number"
          prefix={<TagsOutlined />}
          changeFunction={(e) => setData({ ...data, phone: e.target.value })}
        />
        { isEngineer && (
        <>
          <Forminput
            name="Hourly Price"
            placeHolder="ENTER YOUR PRICE PER HOUR"
            prefix={<DollarOutlined />}
            changeFunction={(e) => setData({ ...data, hourPrice: isEngineer ? e.target.value : null })}
          />
          <Form.Item label="Description" name="Description">
            <Input.TextArea
              placeholder="YOUR BIO"
              onChange={(e) => setData({ ...data, bio: isEngineer ? e.target.value : null })}
              rows={4}
            />
          </Form.Item>

        </>
        )}
      </Modal>
    </Form>
  );
}

SignupModal.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SignupModal;
