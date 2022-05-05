import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

function FooterTwitter({ header }) {
  return (
    <div className="footer__tweet">
      <h4 className="footer__ul__header">{header}</h4>
      <div className="twitter__box">
        <FaTwitter />
      </div>
      <p className="tweet__text">
        Looking to boost your productivity and your design career, to make 2022
        your most productive year yet? Weve roun… twitter.com/i/web/status/1…
      </p>
    </div>
  );
}

FooterTwitter.propTypes = {
  header: PropTypes.string.isRequired,
};
export default FooterTwitter;
