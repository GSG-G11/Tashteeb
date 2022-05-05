import React, { useState } from 'react';
import './style.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Group 91.svg';

function Navbar() {
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
        <Link href="/">Home</Link>
        <Link href="/shop">Shop </Link>
        <Link href="/services">Services</Link>
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
        <Button
          type="primary"
          style={{
            marginTop: '25px',
            backgroundColor: '#EDB820',
            borderRadius: ' 5px',
            border: ' 1px solid #EDB820',
            color: '#fff',
            fontWeight: ' 500',
            transition: 'all 1s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px ',
          }}
          className="signup-btn"
        >
          Sign Up
        </Button>
      </section>
    </nav>
  );
}

export default Navbar;
