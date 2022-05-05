import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';

function PasswordInput({
  placeHolder, changeFunction, name, hide, show,
}) {
  return (
    <Form.Item
      label={`${name}`}
      name={`${name}`}

    >
      <Input.Password
        placeholder={placeHolder}
        onChange={changeFunction}
        iconRender={(visible) => (visible ? show : hide)}
      />
    </Form.Item>
  );
}
PasswordInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  changeFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  show: PropTypes.node.isRequired,
  hide: PropTypes.node.isRequired,
};

export default PasswordInput;
