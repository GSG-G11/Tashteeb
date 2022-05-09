import React from 'react';
import PropTypes from 'prop-types';
import imagelogo from '../../Assets/user.png';
import { useAuth } from '../../Context/AuthContext';

function UserInfo({ username }) {
  const { logout } = useAuth();
  return (
    <div className="user-info">
      <img src={imagelogo} alt="" />
      <p>{username}</p>
      <div className="child">
        <button type="button" onClick={() => logout()}>Log Out</button>
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserInfo;
