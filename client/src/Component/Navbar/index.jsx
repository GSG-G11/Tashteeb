import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Group 91.svg';
import SignupModal from '../Modal';
import UserInfo from './UserInfo';
import { useAuth, ADMIN_ROLE } from '../../Context/AuthContext';
import LoginModal from '../Modal/login';

function Navbar() {
  const { user } = useAuth();

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
        <Link to="/">Home</Link>
        <Link to="/products">Shop </Link>
        <Link to="/eng">Engineer</Link>
        {user?.role === ADMIN_ROLE && <Link to="/dashboard">Dashboard</Link>}
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
        {!user ? (
          <>
            <LoginModal />
            <SignupModal title="Sign Up" />
          </>
        ) : (
          <UserInfo username={user.username} />
        )}
      </section>
    </nav>
  );
}

export default Navbar;
