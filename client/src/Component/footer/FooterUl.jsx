import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

function FooterUl({ header, data }) {
  return (
    <div className="footer__ul">
      <h4 className="footer__ul__header">{header}</h4>
      <ul>
        {data.map((value) => (
          <li>
            <FaCaretRight className="arrow__icon" />
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterUl.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterUl;
