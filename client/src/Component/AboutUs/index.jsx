import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../Navbar';
import './style.css';
import image from './about.jpg';

function AboutUs() {
  return (
    <>
      <Navbar transparent={false} />
      <div className="about-container">
        <div className="about-image">
          <img src={image} alt="aboutImage" />
        </div>
        <div className="about-text">
          <h1 className="pat" style={{ color: '#EDB821' }}> TashTeeb</h1>
          <br />
          <p>
            Is a website that specializes in helping users to find the
            necessary equipment, tools, and People that can help them finish up
            their dream home.
            <br />
            <br />
            While on the other hand help engineers to land jobs
            and use their skill in what they were trained for.
            <br />
            <br />
            These services not
            only cover the work by hand part but also on the consolations and
            counseling part too. If you need any advice or service we are the
            choice for you. we provide an easier pathway between users and
            engineers to find each other. provided a direct link for
            communication.
            <br />
            <br />
            <div className="button-about">
              <Link to="/" className="browser ">
                Continue Browsing
              </Link>
            </div>

          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
