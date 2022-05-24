import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { useAuth } from '../../Context/AuthContext';

function UserInfo({ username, image }) {
  const { logout } = useAuth();
  return (
    <div className="user-info">
      <Image
        cloudName="dst1qgbta"
        publicId={image}
      />
      <p>{username}</p>
      <div className="child">
        <button type="button" onClick={() => logout()}>
          Log Out
        </button>
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserInfo;
