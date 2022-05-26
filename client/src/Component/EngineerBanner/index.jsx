import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function EngineerBanner({ title, desc }) {
  return (
    <div className="hero-image">
      <div className="engineerDate">
        <div className="dataEng">
          <div><h1>{title}</h1></div>
          <div className="engineerLinks">
            <p> {desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

EngineerBanner.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default EngineerBanner;
