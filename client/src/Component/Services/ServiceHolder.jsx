import React from 'react'
import ServiceCard from './ServiceCard'
import './Service.css';
const ServiceHolder = () => {
  return (
    <div className="service-holder">
      <ServiceCard />
      <ServiceCard />    
    </div>
  );
}

export default ServiceHolder