import React from 'react';
import './style.css';

function ServicesBar() {
  return (
    <section className="service-bar">
      <div className="spacing" />
      <div>
        <h2 className="service-heading">What We Do</h2>
        <hr />
        <p className="service-description">type here any thing you want to say. maybe somthing ensperational?</p>
      </div>
      <div className="service-container">
        <div className="service-landing">
          <p>Service no</p>
        </div>
        <div className="service-landing">
          <p>Service no</p>
        </div>
        <div className="service-landing">
          <p>Service no</p>
        </div>
        <div className="service-landing">
          <p>Service no</p>
        </div>
      </div>
    </section>
  );
}
export default ServicesBar;
