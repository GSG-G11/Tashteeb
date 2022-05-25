import React from 'react';
import { Button } from 'antd';
import Navbar from '../Navbar';
import banner from '../../Assets/home-done.svg';
import './style.css';

function Header() {
  return (
    <header className="header-holder">
      <Navbar />
      <section className="image-holder">
        <img src={banner} alt="" />
        <div className="banner-info">
          <h3>we are construction parteners .</h3>
          <h1>We Are The Best Builders</h1>
          <Button type="primary">
            Who We Are
          </Button>
        </div>
      </section>
    </header>
  );
}

export default Header;
