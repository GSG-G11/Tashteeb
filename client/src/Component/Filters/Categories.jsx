import React from 'react';
import { Select } from 'antd';
import { PropTypes } from 'prop-types';

const { Option } = Select;

// eslint-disable-next-line func-names
function Categories({ handleCateorieCahnge, allCategories }) {
  return (
    <Select
      defaultValue="Pick A Category"
      style={{ width: 120 }}
      onChange={(e) => handleCateorieCahnge(e)}
      className="sele__categories"
    >
      {allCategories.map((e) => (
        <Option key={e.id} value={e.id}>
          {e.name}
        </Option>
      ))}
    </Select>
  );
}

Categories.propTypes = {
  handleCateorieCahnge: PropTypes.func.isRequired,
  allCategories: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Categories;
