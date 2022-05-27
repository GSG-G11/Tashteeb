import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../Assets/Group 91.svg';
import SignupModal from '../Modal';
import UserInfo from './UserInfo';
import {
  useAuth, ADMIN_ROLE, USER_ROLE, ENGINEER_ROLE,
} from '../../Context/AuthContext';
import LoginModal from '../Modal/login';
import ShowBadge from '../Badge/Badge';

function Navbar({ transparent = true }) {
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
    <nav className={`navbar-holder ${transparent && navbar}`}>
      <section className="app-logo">
        <Link to="/">
          <img src={logo} alt="website logo" />
        </Link>
      </section>
      <section className="navbar-info">
        <Link to="/">Home</Link>
        <Link to="/products">Shop </Link>
        <Link to="/eng">Engineer</Link>
        {user?.role === ADMIN_ROLE && <Link to="/dashboard/satistics">Dashboard</Link>}
        {(user?.role === USER_ROLE || user?.role === ENGINEER_ROLE) && (
          <Link to="/hiring">Hiring Order</Link>
        )}
      </section>
      <section
        className="auth-section"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '25px',
        }}
      >
        {!user ? (
          <>
            <Link to="/cart">
              <div className="badge-holder">
                <ShowBadge />
              </div>
            </Link>

            <LoginModal />
            <SignupModal title="Sign Up" />
          </>
        ) : (
          <>
            <Link to="/cart">
              <div className="badge-holder">
                <ShowBadge />
              </div>
            </Link>

            <UserInfo username={user.username} image={user.image} />
          </>
        )}
      </section>
    </nav>
  );
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
};

Navbar.defaultProps = {
  transparent: true,
};

export default Navbar;
