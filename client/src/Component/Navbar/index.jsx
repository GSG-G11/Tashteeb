import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import logo from '../../Assets/Group 91.svg';
import SignupModal from '../Modal';
import UserInfo from './UserInfo';
import {
  useAuth, ADMIN_ROLE, USER_ROLE, ENGINEER_ROLE,
} from '../../Context/AuthContext';
import LoginModal from '../Modal/login';
import ShowBadge from '../Badge/Badge';
import { useSocket } from '../../Context/useSocket';

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

  const navigate = useNavigate();

  const openNotification = (data) => {
    notification.open({
      message: 'Order Created',
      description: data,
      onClick: () => {
        navigate('/dashboard/orders');
      },
    });
  };

  const [delay, setDelay] = useState(true);
  const { socket } = useSocket();

  useEffect(() => {
    if (delay && socket && user?.role === 2) {
      socket.on('connect_error', (err) => {
        // eslint-disable-next-line no-console
        console.log(`connect_error due to ${err.message}`);
      });
      socket.on('notification', (data) => {
        openNotification(data.message);
        setDelay(false);
        setTimeout(
          () => {
            setDelay(true);
          },
          1000,
        );
      });
    }
    return () => {
      socket?.off('connect_error');
      socket?.off('notification');
    };
  }, []);

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
