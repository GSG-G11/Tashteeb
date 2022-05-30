import React from 'react';
import ServiceCard from './ServiceCard';
import femaleEngineer from '../../images/pexels-mikael-blomkvist-8961395.jpg';
import toolsImage from '../../images/pexels-anete-lusina-4792495.jpg';
import './style.css';

function ServiceHolder() {
  return (
    <div className="service-holder">
      <ServiceCard
        img={femaleEngineer}
        title="Hire An Engineer"
        description="Want an engineer to a job for you?
        | Hire and negineer form our list of awesome teem!"
        link="eng"
      />
      <ServiceCard
        img={toolsImage}
        title="Tools Shop"
        description="shop for all of the tools and
         necessities | find what you need in our shop."
        link="products"
      />
    </div>
  );
}

export default ServiceHolder;
