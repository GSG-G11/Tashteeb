import React from 'react'
import { Input, Form } from 'antd';

const Forminput = ({
  name,
  prefix,
  placeHolder,
  changeFunction,
}) => {
  return (
    <Form.Item
      label={name}
      name={`${name}`}
    >
      <Input
        prefix={prefix}
        placeholder={placeHolder}
        onChange={changeFunction}
      />
    </Form.Item>
  );
};

export default Forminput;