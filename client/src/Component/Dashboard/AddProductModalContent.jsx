import React, { useContext, useEffect, useState } from 'react';
import {
  Select, Form,
} from 'antd';
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
  useEffect(() => {
    axios.get('/api/v1/categories').then((res) => {
      setCategories(res.data.data);
    });
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
        <input
          type="file"
          onChange={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
              setForm({ ...form, image: reader.result });
            };
          }}
        />
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
