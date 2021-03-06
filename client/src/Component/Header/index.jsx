import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import banner from '../../Assets/home-done.svg';
import './style.css';

function Header() {
  return (
    <header className="header-holder">
      <Navbar />
      <section className="image-holder">
        <img src={banner} alt="" />
        <div className="banner-info">
          <h3>we are construction parteners .</h3>
          <h1>The builders we are the best </h1>
          <Link to="/about" className="about-home">
            Who We Are
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
