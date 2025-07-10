import BusinessInfoCards from '../components/contact/BusinessInfo';
import ContactSection from '../components/Contactsection';
import EmergencyHelpSection from '../components/EmergencyHelp';
import Hero from '../components/Hero';

const Contact = () => {
  return (
    <>
      <Hero pageText='Contact' imagelink='/contactHero.png' />
      <div className='lg:mt-[5%] mt-[4%]  relative -z-10 '>
        <ContactSection />
      </div>
      <BusinessInfoCards />
      <EmergencyHelpSection />
    </>
  );
};

export default Contact;
