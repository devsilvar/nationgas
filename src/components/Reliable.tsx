import React from 'react';

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
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  buttonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className='bg-[#FFF8D7] border shadow-2xl  overflow-hidden'>
      {/* Image Container */}
      <div className='w-full bg-gray-200 overflow-hidden'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className=' h-[260px] object-cover '
        />
      </div>

      {/* Content Container */}
      <div className='p-6 '>
        <h3 className=' text-gray-900 mb-2'>{title}</h3>
        <p className='text-gray-700  font-normal text-[16px] mb-6 leading-relaxed'>
          {description}
        </p>

        {/* Features List */}
        <div className='space-y-5 mb-6'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center'>
              <img src='/check.svg' alt='' className='mr-2' />
              <span className='text-gray-700 font-normal text-sm'>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className='w-auto bg-black text-white py-2.5 px-5 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 rounded-lg'>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
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
    },
  ];

  return (
    <div className='bg-white py-16 px-4  '>
      <div className='flex flex-col gap-[16px] mb-[35px]'>
        <h2 className='font-[600] lg:text-[40px] text-[20px] text-center w-[70%] mx-auto lg:w-full'>
          Fast, Safe & Reliable Gas Services
        </h2>
        <p className='text-[16px] font-[400] text-center px-5 lg:px-0'>
          From gas delivery to equipment sales and professional installations,
          we've got all your needs covered
        </p>
      </div>
      <div className='  max-w-[95%] lg:max-w-[85%] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
