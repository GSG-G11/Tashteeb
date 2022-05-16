import React, { useEffect, useState } from 'react';
import { Select, Form } from 'antd';
import axios from 'axios';
import Forminput from '../Modal/input';

import './style.css';

const { Option } = Select;

function AddProductModalContent() {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const res = await axios.get('/categories');
    console.log(res);

    setCategories(res.data.data);
  }, [Select]);

  // add product request from backend

  return (
    <>
      <Forminput
        name="Name"
        placeHolder="add product name"
        changeFunction={(e) => console.log(e.target.value)}
      />
      <Forminput
        name="Description"
        placeHolder="add product description"
        changeFunction={(e) => console.log(e.target.value)}
      />
      <Forminput
        name="Price"
        placeHolder="add product price"
        changeFunction={(e) => console.log(e.target.value)}
      />
      <Forminput
        name="Image"
        placeHolder="add product image"
        changeFunction={(e) => console.log(e.target.value)}
      />
      <Form.Item label="Category" name="category">
        <Select
          style={{ width: 120 }}
          onChange={(e) => console.log(e)}
          className="sele"
        >
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>{category.name}</Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
}

export default AddProductModalContent;
