import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Select, Form, Button, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import Forminput from '../Modal/input';
import { Context } from '../../Context/ProductContext';

const { Option } = Select;

function UpdateProductModalContent({ data }) {
  const { setForm, form } = useContext(Context);
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const res = await axios.get('/categories');
    setCategories(res.data.data);
  }, [Select]);
  return (
    <>
      <Forminput
        name="Name"
        placeHolder="add product name"
        changeFunction={(e) => setForm({ ...form, name: e.target.value })}
        theDefault={data.name}
      />
      <Forminput
        theDefault={data.description}
        name="Description"
        placeHolder="add product description"
        changeFunction={(e) => setForm({ ...form, description: e.target.value })}
      />
      <div className="imageproduct-container">
        <p className="imageproduct"> Image : </p>
        <Upload
          type="pictures"
          accept=".jpg,.png,.png"
          onChange={(e) => setForm({ ...form, image: e.file })}
          theDefault={data.image}
        >
          <Button className="imageproductBtn" icon={<UploadOutlined />}>
            Click to Upload
          </Button>
        </Upload>
      </div>
      <Forminput
        name="Price"
        placeHolder="add product price"
        changeFunction={(e) => setForm({ ...form, price: e.target.value })}
        theDefault={data.price}
      />
      <Form.Item label="Category" name="category">
        <Select
          theDefault={data.categoryId}
          style={{ width: 120 }}
          className="sele"
          onChange={(e) => setForm({ ...form, categoryId: e })}
        >
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
}
UpdateProductModalContent.propTypes = {
  data: PropTypes.func.isRequired,
};
export default UpdateProductModalContent;
