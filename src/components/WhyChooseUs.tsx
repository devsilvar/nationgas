import React from 'react';
import { ShieldCheck, Headphones, Users2 } from 'lucide-react';

const features = [
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

const WhyChooseUs: React.FC = () => {
  return (
    <section className='bg-white py-16 px-4 text-center my-10'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl md:text-[32px] font-semibold text-black mb-2'>
            Why Choose Nations Gas?
          </h2>
          <p className='text-gray-[40px]00 mb-12 text-[16px]'>
            We're committed to providing safe, reliable, and <br /> professional
            gas services you can trust
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-20  '>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col mx-auto w-[90%] items-center text-center'
            >
              <div className='bg-[#ffeaea] p-[16px] rounded-[23.5px] mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-[24px] text-center font-semibold text-black mb-2'>
                {feature.title}
              </h3>
              <p className='text-[16px] text-gray-[40px]00'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
