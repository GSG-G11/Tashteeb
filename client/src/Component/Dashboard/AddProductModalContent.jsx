import React, { useContext, useEffect, useState } from 'react';
import {
  Select, Form, Button, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import Forminput from '../Modal/input';
import { Context } from '../../Context/ProductContext';
import './style.css';

const { Option } = Select;

function AddProductModalContent() {
  const {
    setForm, form,
  } = useContext(Context);
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
      />
      <Forminput
        name="Description"
        placeHolder="add product description"
        changeFunction={(e) => setForm({ ...form, description: e.target.value })}
      />
      <div className="imageproduct-container">
        <p className="imageproduct"> Image :     </p>
        <Upload
          type="pictures"
          accept=".jpg,.png,.png"
          onChange={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.file);
            reader.onload = () => {
              setForm({ ...form, image: reader.result });
            };
          }}
        >
          <Button className="imageproductBtn" icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <Forminput
        name="Price"
        placeHolder="add product price"
        changeFunction={(e) => setForm({ ...form, price: e.target.value })}
      />
      <Form.Item label="Category" name="category">
        <Select
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

export default AddProductModalContent;
