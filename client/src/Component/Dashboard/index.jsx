import React from 'react';
import './style.css';
import {
  Layout, Menu, Breadcrumb,
} from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Group 91.svg';

const {
  Header, Sider, Content,
} = Layout;
const items2 = [UserOutlined, LaptopOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `naav ${key}`,
    };
  },
);
function Dashboard() {
  return (
    <div className="Dashboard">
      <Layout>
        <Header style={{ padding: 10 }} className="Dashboard-header">
          <Link to="/">
            <section className="app-logo">
              <img src={logo} alt="website logo" />
            </section>
          </Link>
          {' '}
          <h2>IBRAHIM</h2>
        </Header>
        <Layout>
          <Sider style={{ minHeight: '89.3vh' }} s>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 450 }}>
                <h2>hello hleo</h2>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
