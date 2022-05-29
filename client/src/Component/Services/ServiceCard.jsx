import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function ServiceCard({
  img, title, description, link,
}) {
  return (
    <div className="service-card">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="service-info">
        <Link to={link}>
          <h2>{title}</h2>
        </Link>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ServiceCard;
