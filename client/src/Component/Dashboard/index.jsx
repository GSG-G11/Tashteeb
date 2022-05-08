import React, { useState } from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Group 91.svg';
import ProductList from './ProductList';
import Satistics from './Satistics';

const { Header, Sider, Content } = Layout;
const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: ` ${key === '1' ? 'Products' : 'Satistics'}`,
  };
});
function Dashboard() {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className="Dashboard">
      <Layout>
        <Header
          style={{ padding: 10, backgroundColor: '#1D202F' }}
          className="Dashboard-header"
        >
          <Link to="/">
            <section className="app-logo">
              <img src={logo} alt="website logo" />
            </section>
          </Link>
          <h2>IBRAHIM</h2>
        </Header>
        <Layout>
          <Sider style={{ minHeight: '89.3vh' }} s>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                paddingTop: '50px',
                backgroundColor: '#1D202F',
              }}
              items={items2}
              onClick={() => setSubMenu(!subMenu)}
            />
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 450,
                }}
              >
                {subMenu ? <ProductList subMenu={subMenu} /> : <Satistics />}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
