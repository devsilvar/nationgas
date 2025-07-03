import React from 'react';
import Hero from '../components/Hero';
import OurImpact from '../components/about/OurImpact';
import ServicesSection from '../components/about/Services';
import SafetyPriority from '../components/SafePiority';
import GasProductGrid from '../components/Gasproducts';
import ContactSection from '../components/Contactsection';
import EmergencyHelpSection from '../components/EmergencyHelp';

const Aboutus = () => {
  return (
    <>
      <Hero imagelink='/AboutHero.png' pageText='About' />
      <OurImpact />
      <ServicesSection />
      <SafetyPriority />
      <GasProductGrid />
      <ContactSection />
      <EmergencyHelpSection />
    </>
  );
};

export default Aboutus;
