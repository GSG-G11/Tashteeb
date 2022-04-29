import React from 'react'
import './style.css'
import logo from '../../Assets/Group 91.svg'
import { Button } from 'antd'

const Navbar = () => {
  return (
    <nav className="navbar-holder">
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
        <Button
          type="primary"
          style={{
            backgroundColor: 'red',
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

export default Navbar
