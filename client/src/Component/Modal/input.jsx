import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

function Forminput({
  name, prefix, placeHolder, changeFunction, theDefault = '',
}) {
  return (
    <Form.Item label={name} name={`${name}`}>
      <Input
        defaultValue={theDefault}
        prefix={prefix}
        placeholder={placeHolder}
        onChange={changeFunction}
      />
    </Form.Item>
  );
}
Forminput.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.node,
  placeHolder: PropTypes.string.isRequired,
  changeFunction: PropTypes.func.isRequired,
  theDefault: PropTypes.string,
};
Forminput.defaultProps = {
  theDefault: '',
  prefix: null,
};
export default Forminput;
