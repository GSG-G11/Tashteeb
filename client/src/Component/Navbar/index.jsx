import React from 'react';
import './style.css';
import logo from '../../Assets/Group 91.svg';
import { Button } from 'antd';
import { useState } from 'react';
import SignupModal from '../Modal';

const Navbar = () => {
  const [navbar, setNavbar] = useState('transparent');
  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNavbar('solid');
    } else {
      setNavbar('transparent');
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={`navbar-holder ${navbar}`}>
      <section className="app-logo">
        <img src={logo} alt="website logo" />
      </section>
      <section className="navbar-info">
        <a>Home</a>
        <a>Shop </a>
        <a>Services</a>
      </section>
      <section
        className="auth-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '25px',
        }}
      >
        <Button
          type="primary"
          ghost
          style={{
            marginTop: '25px',
            backgroundColor: 'transparent',
            borderRadius: ' 5px',
            border: ' 1px solid #EDB820',
            color: '#EDB820',
            fontWeight: ' 500',
            transition: 'all 1s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
          }}
          className="signin-btn"
        >
          Sign In
        </Button>
        <SignupModal />
      </section>
    </nav>
  );
};

export default Navbar;
