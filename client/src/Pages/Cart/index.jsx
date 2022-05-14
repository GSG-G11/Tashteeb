import React from 'react';
import { Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Table from './Table';
import './style.css';
import ShoppingSummary from '../../Component/ShoppingSummary';
import CartProvider from '../../Context/shoppingSummary';

export default function Cart() {
  return (
    <CartProvider>
      <div className="cart">
        <Table />
        <Link to="/">
          <Button className="continue-shopping" type="primary" shape="round" icon={<ShoppingOutlined />} size="large">
            Continue Shopping
          </Button>
        </Link>
        <ShoppingSummary />
      </div>
    </CartProvider>
  );
}
