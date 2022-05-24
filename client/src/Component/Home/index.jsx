import React from 'react';
import Header from '../Header';
import ServiceHolder from '../Services/ServiceHolder';
import EngCard from '../EngineerCard';
import ServicesBar from '../servicesBar/index';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <ServiceHolder />
      <ServicesBar />
      <EngCard />
      <Footer />
    </>
  );
}

export default Home;
