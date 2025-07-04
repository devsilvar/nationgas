import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ShieldCheck, Headphones, Users2 } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className='w-[40px] h-[40px] text-black' />,
    title: 'Safety First',
    description:
      'All our gas cylinders are tested and certified. Our technicians are trained in safety protocols.',
  },
  {
    icon: <Headphones className='w-[40px] h-[40px] text-black' />,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support for emergencies and urgent deliveries.',
  },
  {
    icon: <Users2 className='w-[40px] h-[40px] text-black' />,
    title: 'Trusted by 1000+',
    description:
      'Round-the-clock customer support for emergencies and urgent deliveries.',
  },
];

// ========================
// Animation Variants (Typed)
// ========================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const subHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: 'easeInOut',
    },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.3,
      delayChildren: 0.6,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// ========================
// Component
// ========================
const WhyChooseUs: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className='bg-white py-16 px-4 text-center my-10'
    >
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col gap-5'>
          <motion.h2
            variants={headerVariants}
            className='text-2xl md:text-[32px] font-semibold text-black mb-2'
          >
            Why Choose Nations Gas?
          </motion.h2>
          <motion.p
            variants={subHeaderVariants}
            className='text-gray-600 mb-12 text-[16px]'
          >
            We're committed to providing safe, reliable, and <br /> professional
            gas services you can trust
          </motion.p>
        </div>

        <motion.div
          variants={gridVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-20'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: [0, 0, 0.58, 1],
                },
              }}
              className='flex flex-col mx-auto w-[90%] items-center text-center cursor-pointer'
            >
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: '#ffd7d7',
                  transition: { duration: 0.3 },
                }}
                className='bg-[#ffeaea] p-[16px] rounded-[23.5px] mb-4'
              >
                {feature.icon}
              </motion.div>

              <motion.div variants={contentVariants}>
                <motion.h3
                  variants={textVariants}
                  className='text-[24px] text-center font-semibold text-black mb-2'
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className='text-[16px] text-gray-600'
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
