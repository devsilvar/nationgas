import React from 'react';
import { motion, type Variants } from 'framer-motion';

const EmergencyHelpSection: React.FC = () => {
  // Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const textVariants: Variants = {
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

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='bg-black text-white pt-10 px-4 md:px-16'
    >
      <div className='max-w-[90%] lg:max-w-7xl mx-auto flex flex-col justify-center md:flex-row items-center lg:justify-between gap-10'>
        {/* Text Section */}
        <motion.div variants={textVariants} className='lg:flex-1'>
          <h2 className='text-2xl text-white font-semibold mb-4 text-center lg:text-left'>
            Need Immediate Help?
          </h2>

          <motion.p
            variants={textVariants}
            className='text-gray-300 mb-6 lg:text-start text-center px-4 lg:px-0 text-sm md:text-base max-w-md'
          >
            For urgent gas deliveries or emergency services, contact us
            immediately.
          </motion.p>

          <motion.a
            variants={textVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(234, 179, 8, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            href='https://wa.me/234236913404'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-yellow-400 block text-center lg:w-[50%] lg:mx-0 w-[60%] mx-auto text-black font-medium px-3 py-3 rounded-md hover:bg-yellow-500 transition'
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div variants={imageVariants} className='flex-1'>
          <motion.img
            src='/gasimage.png'
            alt='Gas Cylinders'
            className='w-full max-w-md md:max-w-full object-contain'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmergencyHelpSection;
