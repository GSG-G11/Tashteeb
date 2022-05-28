import React from 'react';
import './style.css';
import helmet from '../../images/helmet (3) 1.png';
import excavator from '../../images/excavator 1.png';
import lightBulb from '../../images/lightbulb 1.png';
import store from '../../images/store 1.png';

function ServicesBar() {
  return (
    <section className="service-bar">
      <div className="spacing" />
      <div>
        <h2 className="service-heading">What We Do</h2>
        <hr />
        <p className="service-description">Here At Tashteeb We Dont believe In To Do Lists, We Believe That The Right Time To Be Doing Something Is NOW!</p>
      </div>
      <div className="service-container">
        <div className="service-landing">
          <img src={lightBulb} alt="bulb" />
          <p>Create Ideas </p>
        </div>
        <div className="service-landing">
          <img src={store} alt="store" />
          <p>Provide All The Tools </p>
        </div>
        <div className="service-landing">
          <img src={excavator} alt="excavator" />
          <p>Help You Build</p>
        </div>
        <div className="service-landing">
          <img src={helmet} alt="helemet" />
          <p>Find & Hire Great Engineers</p>
        </div>
      </div>
    </section>
  );
}
export default ServicesBar;
