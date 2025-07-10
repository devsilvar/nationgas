import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const ContactSection: React.FC = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className='bg-white py-16 relative   -z-10 px-4 md:px-10 mx-auto lg:max-w-[80%] text-center'
    >
      <motion.h2
        variants={itemVariants}
        className='text-[32px] font-bold text-gray-900 mb-2'
      >
        Get In Touch
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className='text-gray-600 text-[16px] mb-12'
      >
        Ready to place an order or have questions? We're here to help!
      </motion.p>

      <div className='grid gap-8 md:grid-cols-3 max-w-6xl mx-auto'>
        {/* Call Us */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow:
              '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          }}
          whileTap={{ scale: 0.98 }}
          className='border rounded-2xl p-6 shadow-sm transition duration-300'
        >
          <div className='flex flex-col items-center'>
            <motion.div
              whileHover={{ rotate: 10 }}
              className='bg-pink-100 p-3 rounded-[23.5px] mb-4'
            >
              <img src='/call.svg' alt='Call icon' />
            </motion.div>
            <div className='mb-9 text-center'>
              <h3 className='text-lg font-semibold mb-2'>Call Us</h3>
              <p className='text-sm text-gray-600 mb-4'>
                Speak directly with our team
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='tel:+234236913404'
              className='inline-block px-4 py-2 shadow-2xl border border-gray-500 text-sm rounded-md hover:bg-gray-100 transition'
            >
              Call +234 (2369) 3404
            </motion.a>
          </div>
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow:
              '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          }}
          whileTap={{ scale: 0.98 }}
          className='border rounded-2xl p-6 shadow-sm transition duration-300'
        >
          <div className='flex flex-col items-center'>
            <motion.div
              whileHover={{ rotate: 10 }}
              className='bg-pink-100 p-3 rounded-[23.5px] mb-4'
            >
              <img src='/whatsapp.svg' alt='WhatsApp icon' />
            </motion.div>
            <div className='mb-9 text-center'>
              <h3 className='text-lg font-semibold mb-2'>WhatsApp</h3>
              <p className='text-sm text-gray-600 mb-4'>
                Quick chat and instant orders
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='https://wa.me/234236913404'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 shadow-2xl bg-black text-white text-sm rounded-md hover:bg-gray-800 transition'
            >
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Visit Us */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow:
              '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          }}
          whileTap={{ scale: 0.98 }}
          className='border rounded-2xl p-6 shadow-sm transition duration-300'
        >
          <div className='flex flex-col items-center'>
            <motion.div
              whileHover={{ rotate: 10 }}
              className='bg-pink-100 p-3 rounded-[23.5px] mb-4'
            >
              <img src='/location.svg' alt='Location icon' />
            </motion.div>
            <div className='mb-9 text-center'>
              <h3 className='text-lg font-semibold mb-2'>Visit Us</h3>
              <p className='text-sm text-gray-600 mb-2'>
                123 Gas Street <br />
                City Center, State 12345
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='https://maps.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 border shadow-2xl border-gray-500 text-sm rounded-md hover:bg-gray-100 transition'
            >
              Get Direction
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
