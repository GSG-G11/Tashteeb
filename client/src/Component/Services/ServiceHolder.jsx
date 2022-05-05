import React from 'react';
import ServiceCard from './ServiceCard';
import './style.css';

function ServiceHolder() {
  return (
    <div className="service-holder">
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}

export default ServiceHolder;
