import { Select } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const { Option } = Select;

function SelectInput({ changeFunction }) {
  return (
    <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={changeFunction}
      className="sele"
    >
      <Option value="0">User</Option>
      <Option value="1">Engineer</Option>
    </Select>
  );
}
SelectInput.propTypes = {
  changeFunction: PropTypes.func.isRequired,
};
export default SelectInput;
