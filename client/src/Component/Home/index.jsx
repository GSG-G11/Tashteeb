import React from 'react';
import Header from '../Header';
import ServiceHolder from '../Services/ServiceHolder';
import EngCard from '../EngineerCard';
import ServicesBar from '../servicesBar/index';

function Home() {
  return (
    <>
      <Header />
      <ServiceHolder />
      <ServicesBar />
      <EngCard />
    </>
  );
}

export default Home;
