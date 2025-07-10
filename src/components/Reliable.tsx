import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

// =====================
// Interfaces
// =====================
interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: ServiceFeature[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

// =====================
// Variants (Typed)
// =====================
const getCardVariants = (index: number): Variants => ({
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: index * 0.2,
    },
  },
});

const getImageVariants = (index: number): Variants => ({
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: index * 0.2 + 0.1,
    },
  },
});

const getContentVariants = (index: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: index * 0.2 + 0.3,
    },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const subHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// =====================
// ServiceCard Component
// =====================
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  buttonText,
  imageSrc,
  imageAlt,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={getCardVariants(index)}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className='bg-[#FFF8D7] border shadow-2xl overflow-hidden cursor-pointer'
    >
      {/* Image */}
      <div className='w-full bg-gray-200 overflow-hidden'>
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          variants={getImageVariants(index)}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className='h-[260px] object-cover w-full'
        />
      </div>

      {/* Content */}
      <motion.div
        variants={getContentVariants(index)}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='p-6'
      >
        <motion.h3 variants={itemVariants} className='text-gray-900 mb-2'>
          {title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className='text-gray-700 font-normal text-[16px] mb-6 leading-relaxed'
        >
          {description}
        </motion.p>

        {/* Features */}
        <motion.div variants={itemVariants} className='space-y-5 mb-6'>
          {features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              variants={featureVariants}
              className='flex items-center'
            >
              <motion.img
                src='/check.svg'
                alt=''
                className='mr-2'
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.2 + 0.6 + featureIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      }
                    : {}
                }
              />
              <span className='text-gray-700 font-normal text-sm'>
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#1f2937',
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className='w-auto bg-black text-white py-2.5 px-5 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 rounded-lg'
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// =====================
// ServicesSection Component
// =====================
const ServicesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const services: ServiceCardProps[] = [
    {
      title: 'Gas Delivery',
      description: 'Fast and reliable gas cylinder delivery to your doorstep',
      features: [
        { text: 'Same-day delivery available' },
        { text: 'All cylinder sizes' },
        { text: 'Safety-checked gas' },
        { text: 'Flexible scheduling' },
      ],
      buttonText: 'Book Delivery',
      imageSrc: '/reliable1.png',
      imageAlt: 'Colorful gas cylinders arranged in a row',
      index: 0,
    },
    {
      title: 'Equipment Shop',
      description: 'Premium gas appliances, stoves, and accessories',
      features: [
        { text: 'Gas stoves & burners' },
        { text: 'Regulators & hoses' },
        { text: 'Safety equipment' },
        { text: 'Warranty included' },
      ],
      buttonText: 'Place Order',
      imageSrc: '/reliable2.png',
      imageAlt: 'Gas equipment and pressure gauges',
      index: 1,
    },
    {
      title: 'Installation Services',
      description: 'Professional gas line installation and appliance setup',
      features: [
        { text: 'Certified technicians' },
        { text: 'Safety inspections' },
        { text: 'New connections' },
        { text: 'Maintenance services' },
      ],
      buttonText: 'Book Installation',
      imageSrc: '/reliable3.png',
      imageAlt: 'Hands working on gas equipment installation',
      index: 2,
    },
  ];

  return (
    <div className='bg-white py-16 px-4'>
      <motion.div ref={ref} className='flex flex-col gap-[16px] mb-[35px]'>
        <motion.h2
          variants={headerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='font-[600] lg:text-[40px] text-[20px] text-center w-[70%] mx-auto lg:w-full'
        >
          Fast, Safe & Reliable Gas Services
        </motion.h2>
        <motion.p
          variants={subHeaderVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-[16px] font-[400] text-center px-5 lg:px-0'
        >
          From gas delivery to equipment sales and professional installations,
          we've got all your needs covered
        </motion.p>
      </motion.div>

      <div className='max-w-[95%] lg:max-w-[85%] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service) => (
            <ServiceCard key={service.index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
