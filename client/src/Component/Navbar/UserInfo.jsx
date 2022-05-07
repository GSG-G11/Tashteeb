import React from 'react';
import PropTypes from 'prop-types';
import imagelogo from '../../Assets/user.png';

function UserInfo({ username }) {
  return (
    <div className="user-info">
      <img src={imagelogo} alt="" />
      <p>{username}</p>
      <div className="child">
        <button type="button">Log Out</button>
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserInfo;
