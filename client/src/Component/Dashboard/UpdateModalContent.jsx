import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Select, Form,
} from 'antd';
import axios from 'axios';
import Forminput from '../Modal/input';
import { Context } from '../../Context/ProductContext';

const { Option } = Select;

function UpdateProductModalContent({ data }) {
  const { setForm, form } = useContext(Context);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/categories').then((res) => {
      setCategories(res.data.data);
    });
    setForm({
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
    });
  }, []);
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
        theDefault={data.price}
      />
      <Form.Item label="Category" name="category">
        <Select
          defaultValue={data.category.name}
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
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    categoryId: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};
export default UpdateProductModalContent;
