import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import {
  Modal, Input, Form, InputNumber,
} from 'antd';
import { PropTypes } from 'prop-types';
import './style.css';
import { success, error } from '../AntdMessages.jsx/messages';

function ProductDetailes({
  isProduct = true,
  name,
  description,
  img,
  price = '0',
  phone,
  id,
  hourPrice = 0,
}) {
  const [data, setData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = async () => {
    setIsModalVisible(false);
    if (data.price && data.description) {
      try {
        await axios.post(`/hiringOrder/${id}`, data);
        success('Order sent successfully');
      } catch (err) {
        error(
          err.response.data.error
            ? err.response.data.error.message
            : err.response.data.message,
        );
      }
    } else {
      error('Please fill all the fields');
    }
    setData({});
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="containerProduct">
      <div className="wrapper">
        <div className="image">
          {/* <img className="product-image" src={img} alt="images" /> */}
          <Image cloudName="dst1qgbta" publicId={img} crop="scale" />
        </div>

        <div className="data">
          <div className="iconStart">
            <span className="checked">
              <i className="ri-star-fill" />
            </span>
            <span className="checked">
              <i className="ri-star-fill" />
            </span>
            <span className="checked">
              <i className="ri-star-fill" />
            </span>
            <span className="checked">
              <i className="ri-star-fill" />
            </span>
            <span className="notCheck">
              <i className="ri-star-line" />
            </span>
            <span className="num">45</span>
          </div>
          <div className="content">
            <h3 className="title">{name}</h3>
            <p className="text">{description}</p>
            {isProduct ? (
              <> </>
            ) : (
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-whatsapp-line iconWhats" />
              </a>
            )}
            {isProduct ? (
              <h3 className="price">
                $
                {price}
              </h3>
            ) : (
              <h3 className="price">
                {' '}
                $
                {' '}
                {hourPrice}
              </h3>
            )}
          </div>

          <div className="buttons">
            {isProduct ? (
              <button type="button" className="Buy">
                BUY
              </button>
            ) : (
              <div>
                <button type="button" className="Buy" onClick={showModal}>
                  Hire Me
                </button>
                <Modal
                  title={`Hire ${name}`}
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Form.Item label="price" name="price">
                    <InputNumber
                      min={0}
                      max={1000}
                      defaultValue={100}
                      onChange={(value) => setData({ ...data, price: value })}
                      addonAfter="$"
                    />
                  </Form.Item>
                  <Form.Item label="Description" name="Description">
                    <Input.TextArea
                      placeholder="What do you need me to do"
                      onChange={(e) => setData({ ...data, description: e.target.value })}
                      rows={4}
                    />
                  </Form.Item>
                </Modal>
              </div>
            )}
            <Link to="/" className="browser" style={{ fontSize: 19.2 }}>
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductDetailes.propTypes = {
  isProduct: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string.isRequired,
  price: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.number.isRequired,
  hourPrice: PropTypes.number,
};

ProductDetailes.defaultProps = {
  isProduct: true,
  price: '0',
  phone: null,
  description: '',
  hourPrice: 0,
};

export default ProductDetailes;
