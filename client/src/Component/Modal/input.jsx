import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

function Forminput({
  name,
  prefix,
  placeHolder,
  changeFunction,
}) {
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
}
Forminput.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  changeFunction: PropTypes.func.isRequired,
};
export default Forminput;
