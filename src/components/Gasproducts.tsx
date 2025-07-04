import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface Product {
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    title: '12.5kg Gas Cylinder',
    description:
      'Durable steel cylinder with protective collar and standard valve.',
    image: '/image.png',
  },
  {
    title: 'Gas Cooker – Table Top (2 Burner)',
    description:
      'Compact, energy-efficient table top gas cooker for everyday use.',
    image: '/image1.png',
  },
  {
    title: 'Gas Regulator with Hose (High Pressure)',
    description:
      'Regulator with 1.5m hose for smooth gas flow and safety assurance.',
    image: '/image2.png',
  },
  {
    title: '6kg Gas Cylinder with Burner (Starter Kit)',
    description: 'Durable and portable gas cylinder complete with top burner.',
    image: '/image3.png',
  },
  {
    title: 'Standing Gas Cooker (4 Burners)',
    description:
      'Modern 4-burner cooker ideal for households with frequent use.',
    image: '/image4.png',
  },
  {
    title: 'Auto-ignition Gas Burner',
    description:
      'Easy-to-use ignition burner ideal for single users and small kitchens.',
    image: '/image5.png',
  },
];

const ITEMS_PER_PAGE = 3;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const itemVariants: Variants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? 100 : -100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

const GasProductGrid: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection('right');
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection('left');
      setPage((prev) => prev - 1);
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='py-20 px-4 text-center bg-white'
    >
      <motion.h2
        variants={itemVariants}
        custom={direction}
        className='text-2xl md:text-3xl font-semibold text-black mb-2'
      >
        Shop Gas Appliances and Accessories
      </motion.h2>
      <motion.p
        variants={itemVariants}
        custom={direction}
        className='text-gray-600 mb-12 max-w-xl mx-auto text-sm md:text-base'
      >
        We're committed to providing safe, reliable, and professional gas
        services you can trust
      </motion.p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-6xl mx-auto min-h-[500px]'>
        <AnimatePresence mode='popLayout' custom={direction}>
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={`${page}-${index}`}
              custom={direction}
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={itemVariants}
              whileHover='hover'
              layout
              className='border overflow-hidden shadow-lg flex flex-col justify-between rounded-lg'
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className='w-full h-[256px] object-cover p-[16px]'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <div className='p-4 flex flex-col gap-2 flex-1 text-start'>
                <h3 className='font-semibold text-[18px] leading-6 text-black'>
                  {product.title}
                </h3>
                <p className='text-[16px] font-[400] my-3 text-gray-600'>
                  {product.description}
                </p>
              </div>
              <div className='px-8 pb-4 mt-3'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-auto px-16 lg:w-full border border-black py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition'
                >
                  Shop
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className='mt-10 flex justify-center gap-4'>
        <motion.button
          onClick={handlePrev}
          disabled={page === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='rounded-full px-2 py-2 border disabled:opacity-50'
        >
          <ChevronLeft />
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='py-2 px-2 border rounded-full disabled:opacity-50'
        >
          <ChevronRight />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default GasProductGrid;
