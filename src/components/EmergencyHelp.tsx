import React from 'react';
// Optional if you're using Next.js; remove if not

const EmergencyHelpSection: React.FC = () => {
  return (
    <section className='bg-black text-white  pt-10 px-4 md:px-16'>
      <div className='max-w-[90%]  lg:max-w-7xl mx-auto flex flex-col justify-center md:flex-row items-center lg:justify-between gap-10'>
        {/* Text Section */}
        <div className='lg:flex-1'>
          <h2 className='text-2xl md:text-3xl lg:text-start text-center  font-semibold mb-4'>
            Need Immediate Help?
          </h2>
          <p className='text-gray-300 mb-6 lg:text-start text-center  px-4 lg:px-0 text-sm md:text-base max-w-md'>
            For urgent gas deliveries or emergency services, contact us
            immediately.
          </p>
          <a
            href='https://wa.me/234236913404'
            target='_blank'
            rel='noopener noreferrer'
            className=' bg-yellow-400 block text-center lg:w-[50%] lg:mx-0  w-[60%] mx-auto text-black font-medium px-3 py-3 rounded-md hover:bg-yellow-500 transition'
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Image Section */}
        <div className='flex-1'>
          <img
            src='/gasimage.png' // Replace with your actual image path
            alt='Gas Cylinders'
            className='w-full max-w-md md:max-w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default EmergencyHelpSection;
