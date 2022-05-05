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
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
};

export default PasswordInput;