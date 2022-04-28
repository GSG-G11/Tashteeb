import React from 'react'
import './style.css';
import logo from '../../Assets/Group 91.svg'
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
        <button className="auth-btn signin-btn">Sign In</button>
        <button className="auth-btn signup-btn">Sign Up</button>
      </section>
    </nav>
  )
}

export default Navbar
