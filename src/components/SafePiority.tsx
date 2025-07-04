import React from 'react';
import { motion, type Variants } from 'framer-motion';

// ========================
// Types
// ========================
interface Badge {
  text: string;
  position: string;
}

// ========================
// Badge Data
// ========================
const badges: Badge[] = [
  {
    text: 'Insured Services',
    position: 'md:bottom-40 bottom-44 right-[10%] lg:right-auto md:left-[30%]',
  },
  {
    text: 'Quality Guaranteed',
    position: 'md:bottom-52 bottom-60 right-[28%] md:right-[32%]',
  },
  {
    text: 'Gas Safety Certified',
    position: 'md:bottom-8 bottom-28 left-[24%] md:left-1/4',
  },
  {
    text: 'Emergency Support',
    position: 'md:bottom-8 bottom-10 right-[2%] md:right-1/4',
  },
];

// ========================
// Variants (Typed)
// ========================
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

const badgeVariants: Variants = {
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

const circleVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// ========================
// Component
// ========================
const SafetyPriority: React.FC = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='lg:h-[503px] h-[550px] relative bg-black text-white py-10 overflow-hidden text-center px-4'
    >
      <div className='max-w-3xl mx-auto z-10 relative'>
        <motion.h2
          variants={textVariants}
          className='text-2xl md:text-[32px] font-semibold mb-4'
        >
          Safety is Our Top Priority
        </motion.h2>
        <motion.h4
          variants={textVariants}
          className='text-gray-300 text-[16px] lg:text-[17px] font-[400] tracking-wide lg:w-[80%] mx-auto md:text-base'
        >
          We follow strict safety protocols in gas handling, delivery, and
          installation. All our equipment is regularly inspected, and our
          technicians are certified professionals. Your safety and satisfaction
          are guaranteed.
        </motion.h4>
      </div>

      {/* Yellow Circle */}
      <motion.div
        variants={circleVariants}
        className='relative lg:left-1/3 transform -translate-x-1/2 -bottom-[13%] w-[528px] h-[528px] bg-yellow-400 rounded-full -z-0'
      />

      {/* Floating Badges */}
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          variants={badgeVariants}
          className={`absolute ${badge.position} bg-white text-black text-xs md:text-sm font-medium flex items-center gap-2 md:px-4 md:py-[10px] py-1 px-2 rounded shadow z-10`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src='/check.svg' alt={badge.text} />
          {badge.text}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SafetyPriority;
