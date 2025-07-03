import Hero from '../components/Hero';
import ServicesSection from '../components/Reliable';
import WhyChooseUs from '../components/WhyChooseUs';
import SafetyPriority from '../components/SafePiority';
import GasProductGrid from '../components/Gasproducts';
import ContactSection from '../components/Contactsection';
import EmergencyHelpSection from '../components/EmergencyHelp';

const Homepage = () => {
  return (
    <div className='relative z-0'>
      <Hero pageText='Home' imagelink='/Hero.png' />
      <ServicesSection />
      <WhyChooseUs />
      <SafetyPriority />
      <GasProductGrid />
      <ContactSection />
      <EmergencyHelpSection />
    </div>
  );
};

export default Homepage;
