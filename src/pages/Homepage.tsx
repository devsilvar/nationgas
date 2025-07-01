import Hero from '../components/Hero';
import ServicesSection from '../components/Reliable';
import WhyChooseUs from '../components/WhyChooseUs';
import SafetyPriority from '../components/SafePiority';
import GasProductGrid from '../components/Gasproducts';
import ContactSection from '../components/Contactsection';

const Homepage = () => {
  return (
    <div className='relative z-0'>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <SafetyPriority />
      <GasProductGrid />
      <ContactSection />
    </div>
  );
};

export default Homepage;
