import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className='bg-white py-16 px-4 md:px-10 lg:px-20 text-center'>
      <h2 className='text-3xl font-bold text-gray-900 mb-2'>Get In Touch</h2>
      <p className='text-gray-600 mb-12'>
        Ready to place an order or have questions? We're here to help!
      </p>

      <div className='grid gap-8 md:grid-cols-3 max-w-6xl mx-auto'>
        {/* Call Us */}
        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex flex-col items-center'>
            <div className='bg-pink-100 p-3 rounded-full mb-4'>
              <Phone className='text-pink-500' size={28} />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Call Us</h3>
            <p className='text-sm text-gray-600 mb-4'>
              Speak directly with our team
            </p>
            <a
              href='tel:+234236913404'
              className='inline-block px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-100 transition'
            >
              Call +234 (2369) 3404
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex flex-col items-center'>
            <div className='bg-pink-100 p-3 rounded-full mb-4'>
              <MessageCircle className='text-pink-500' size={28} />
            </div>
            <h3 className='text-lg font-semibold mb-2'>WhatsApp</h3>
            <p className='text-sm text-gray-600 mb-4'>
              Quick chat and instant orders
            </p>
            <a
              href='https://wa.me/234236913404'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition'
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Visit Us */}
        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300'>
          <div className='flex flex-col items-center'>
            <div className='bg-pink-100 p-3 rounded-full mb-4'>
              <MapPin className='text-pink-500' size={28} />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Visit Us</h3>
            <p className='text-sm text-gray-600 mb-2'>
              123 Gas Street <br />
              City Center, State 12345
            </p>
            <a
              href='https://maps.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 border border-gray-300 text-sm rounded-md hover:bg-gray-100 transition'
            >
              Get Direction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
