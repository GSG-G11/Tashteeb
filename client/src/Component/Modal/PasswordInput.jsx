import React from 'react'
import { Input, Form } from 'antd';

const PasswordInput = ({placeHolder, changeFunction, name , hide, show}) => {
  return (
    <Form.Item label={`${name}`} name={`${name}`}>
      <Input.Password
        placeholder={placeHolder}
        onChange={changeFunction}
        iconRender={(visible) =>
          visible ? show: hide
        }
      />
    </Form.Item>
  );
}

export default PasswordInput