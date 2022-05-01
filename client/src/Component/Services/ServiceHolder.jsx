import React from 'react'
import ServiceCard from './ServiceCard'
import './style.css';
const ServiceHolder = () => {
  return (
    <div className="service-holder">
      <ServiceCard />
      <ServiceCard />    
    </div>
  );
}

export default ServiceHolder