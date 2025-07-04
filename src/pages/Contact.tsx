import BusinessInfoCards from '../components/contact/BusinessInfo';
import ContactSection from '../components/Contactsection';
import EmergencyHelpSection from '../components/EmergencyHelp';
import Hero from '../components/Hero';

const Contact = () => {
  return (
    <>
      <Hero pageText='Contact' imagelink='/contactHero.png' />
      <div className='lg:mt-auto mt-[70%] '>
        <ContactSection />
      </div>
      <BusinessInfoCards />
      <EmergencyHelpSection />
    </>
  );
};

export default Contact;
