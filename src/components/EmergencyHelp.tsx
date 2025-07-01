import React from 'react';
// Optional if you're using Next.js; remove if not

const EmergencyHelpSection: React.FC = () => {
  return (
    <section className='bg-black text-white  pt-10 px-4 md:px-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>
        {/* Text Section */}
        <div className='flex-1'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
            Need Immediate Help?
          </h2>
          <p className='text-gray-300 mb-6 text-sm md:text-base max-w-md'>
            For urgent gas deliveries or emergency services, contact us
            immediately.
          </p>
          <a
            href='https://wa.me/234236913404'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:bg-yellow-500 transition'
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
