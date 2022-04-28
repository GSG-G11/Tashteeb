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
      <section className="auth-section">
        <Button type="primary" shape="circle" className="auth-btn signin-btn">
          Sign In
        </Button>
        <Button type="primary" shape="circle" className="auth-btn signup-btn">
          Sign In
        </Button>
      </section>
    </nav>
  )
}

export default Navbar
