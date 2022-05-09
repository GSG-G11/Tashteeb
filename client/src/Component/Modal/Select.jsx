import { Select } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const { Option } = Select;

function SelectInput({ changeFunction }) {
  return (
    <Select
      defaultValue="2"
      style={{ width: 120 }}
      onChange={changeFunction}
      className="sele"
    >
      <Option value="1">Admin</Option>
      <Option value="2">User</Option>
      <Option value="3">Engineer</Option>
    </Select>
  );
}
SelectInput.propTypes = {
  changeFunction: PropTypes.func.isRequired,
};
export default SelectInput;
