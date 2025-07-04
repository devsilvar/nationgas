import { motion, type Variants } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Button from './Button';

const FeedbackForm = lazy(() => import('./contact/Form'));

interface HeroProps {
  imagelink: string;
  pageText: string;
}

// Typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      delay: 0.4,
    },
  },
};

const starsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: 'easeInOut',
    },
  },
};

const Hero = ({ imagelink, pageText }: HeroProps) => {
  return (
    <section
      className='relative inset-0 lg:h-[500px] h-[400px]'
      style={{
        backgroundImage: `url(${imagelink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2 lg:mx-0 max-w-[90%] mx-auto lg:pt-0 pt-[20%] lg:max-w-[58%]'
      >
        {pageText === 'Home' && (
          <>
            <motion.p
              variants={textVariants}
              className='lg:text-[50px] lg:block hidden lg:text-start font-semibold text-white leading-loose lg:leading-normal mb-4'
            >
              Buy Gas, Shop Equipment, <br />
              And Book A Home <br /> Installation, All In One Place
            </motion.p>
            <motion.p
              variants={textVariants}
              className='text-[24px] w-full mx-auto text-center lg:hidden block font-bold text-white leading-relaxed mb-7'
            >
              Buy Gas, Shop <br /> Equipment, And Book <br /> A Home
              Installation,
              <br />
              All In One Place
            </motion.p>
          </>
        )}

        {pageText === 'About' && (
          <>
            <motion.p
              variants={textVariants}
              className='lg:text-[50px] w-[80%] lg:block hidden lg:text-start font-semibold text-white leading-loose mb-4'
            >
              Making Gas Access Easier, Safer, and Faster.
            </motion.p>
            <motion.p
              variants={textVariants}
              className='text-[24px] w-full mx-auto text-center lg:hidden block font-bold text-white leading-relaxed mb-7'
            >
              Making Gas Access Easier, Safer, and Faster.
            </motion.p>
          </>
        )}

        {pageText !== 'Contact' && (
          <motion.div variants={buttonVariants}>
            <Button className='py-3 w-[60%] lg:w-[40%] block mx-auto lg:mx-0 bg-[#f3ce16] hover:bg-[#ffd814] text-black border text-lg border-gray-700 rounded-[10px] px-4'>
              Contact Us
            </Button>
          </motion.div>
        )}
      </motion.div>

      {pageText === 'Contact' && (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='flex justify-between md:flex-row flex-col items-start w-[90%] mx-auto'
        >
          <motion.div variants={textVariants} className='lg:mt-10 -mt-10'>
            <motion.p
              variants={textVariants}
              className='lg:text-[50px] text-2xl w-[80%] font-bold text-white leading-loose mb-4'
            >
              Contact Us
            </motion.p>
            <motion.p
              variants={textVariants}
              className='lg:w-[60%] mt-2 text-white'
            >
              Ready to place an order or have questions? We're here to help you
              24/7 with fast, friendly service.
            </motion.p>

            <motion.small
              variants={starsVariants}
              className='flex lg:flex-row flex-col lg:items-center text-white text-lg gap-3 mt-3'
            >
              <div className='flex ms-0'>
                {[0, 1, 2, 3, 4].map((item) => (
                  <motion.img
                    key={item}
                    src='/star.svg'
                    alt={`${item + 1} star`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + item * 0.1,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
              Trusted by 1000+ customers
            </motion.small>
          </motion.div>

          <motion.div variants={formVariants}>
            <Suspense
              fallback={
                <div className='w-full h-64 bg-white/10 backdrop-blur-sm rounded-lg animate-pulse flex items-center justify-center'>
                  <div className='text-white'>Loading...</div>
                </div>
              }
            >
              <FeedbackForm />
            </Suspense>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
