import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const fileInput = () => (
  <Upload>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default fileInput;
