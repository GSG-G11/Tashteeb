import React from 'react';
import serviceImage from '../../Assets/01-Home-v1 1.svg';

function ServiceCard() {
  return (
    <div className="service-card">
      <div className="image">
        <img src={serviceImage} alt="" />
      </div>
      <div className="service-info">
        <h2>Service</h2>
        <p>
          put it this way it took me twinty years to get these plants, twinty
          years of blood swat and tears. amd i’m never giving up
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
