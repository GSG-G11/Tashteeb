import React from 'react';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Category1
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Category2
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Category3
          </a>
        ),
      },
    ]}
  />
);

// eslint-disable-next-line func-names
export default function () {
  return (
    <Dropdown overlay={menu}>
      <button type="button" onClick={(e) => e.preventDefault()}>
        <Space>
          Pick a Category
          <DownOutlined />
        </Space>
      </button>
    </Dropdown>
  );
}
