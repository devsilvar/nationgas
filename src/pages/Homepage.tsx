import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/Reliable';
import WhyChooseUs from '../components/WhyChooseus';
import SafetyPriority from '../components/SafePiority';

const Homepage = () => {
  return (
    <div className='relative z-0'>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <SafetyPriority />
    </div>
  );
};

export default Homepage;
