import React from 'react';
import { Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import Table from './Table';
import './style.css';
import ShoppingSummary from '../../Component/ShoppingSummary';
import CartProvider from '../../Context/shoppingSummary';

export default function Cart() {
  return (
    <CartProvider>
      <div className="cart">
        <Table />
        <Button className="continue-shopping" type="primary" shape="round" icon={<ShoppingOutlined />} size="large">
          Continue Shopping
        </Button>
        <ShoppingSummary />
      </div>
    </CartProvider>
  );
}
