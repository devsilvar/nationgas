import React from 'react';

const services = [
  {
    image: '/reliable1.png',
    title: 'Fast Gas Refill & Delivery',
    description:
      'Running low? We deliver cooking gas quickly and safely to your doorstep — no queues, no hassle.',
  },
  {
    image: '/reliable2.png',
    title: 'Trusted Equipment Sales',
    description:
      'Get high-quality cylinders, regulators, burners, and more. Durable, tested, and ready to use.',
  },
  {
    image: '/reliable3.png',
    title: 'Home Installation',
    description:
      'Need help setting up? Our trained technicians handle installations with care and safety in mind.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className='bg-white py-16 px-4 lg:px-20'>
      <h2 className=' my-10 text-[32px] font-[600] text-center'>
        What we Offer{' '}
      </h2>
      <div className='max-w-6xl mx-auto space-y-14'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-full lg:w-1/3 rounded shadow-lg'
            />
            <div className='text-center lg:text-left lg:w-1/3'>
              <h3 className='text-[24px] mb-5 font-semibold  text-black'>
                {service.title}
              </h3>
              <p className='text-sm text-gray-700'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
