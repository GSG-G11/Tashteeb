import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SelectInput = ({ changeFunction }) => {
  return (
    <Select defaultValue="2" style={{ width: 120 }} onChange={changeFunction}>
      <Option value="1">Admin</Option>
      <Option value="2">User</Option>
      <Option value="3">Engineer</Option>
    </Select>
  );
};
export default SelectInput;
