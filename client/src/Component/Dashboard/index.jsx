import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../Assets/Group 91.svg';

const { Header, Sider, Content } = Layout;

function Dashboard() {
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                paddingTop: '50px',
                backgroundColor: '#1D202F',
              }}
            >
              <Menu.Item key="1">
                <Link to="/dashboard/product">
                  <span>Product</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dashboard/orders">
                  <span>Orders</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/satistics">
                  <span>Satistics</span>
                </Link>
              </Menu.Item>
            </Menu>
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
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
