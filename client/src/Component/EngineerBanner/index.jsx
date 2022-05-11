import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';

function EngineerBanner({ title }) {
  return (
    <div className="hero-image">
      <div className="engineerDate">
        <div className="dataEng">
          <div><h1>{title}</h1></div>
          <div className="engineerLinks">
            <Link to="/">Home</Link>
            /
            <Link to="/">Pages</Link>
            /
            <Link to="/">Shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

EngineerBanner.propTypes = {
  title: PropTypes.string.isRequired,
};
export default EngineerBanner;
