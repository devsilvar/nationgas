import React from 'react';

const impactData = [
  {
    icon: '/icon_gas.svg',
    title: '2,500+ kg of Gas Delivered',
    description:
      'Serving homes and small businesses with prompt and reliable delivery.',
  },
  {
    icon: '/gas-pipe.svg',
    title: '300+ Home Installations Completed',
    description:
      'Professionally handled by certified technicians for peace of mind.',
  },
  {
    icon: '/equipment-outline.svg',
    title: '800+ Equipment Items Sold',
    description:
      'From regulators to cookers — trusted tools, real convenience.',
  },
  {
    icon: '/star-ribbon.svg',
    title: '99% Customer Satisfaction',
    description: 'Based on direct feedback and repeat orders via WhatsApp.',
  },
  {
    icon: '/location-outlined.svg',
    title: 'Serving 10+ Communities',
    description:
      'Local reach with fast delivery across [Insert areas e.g., Lekki, Surulere, Ikeja].',
  },
  {
    icon: '/check-off.svg',
    title: '0 Safety Incidents Recorded',
    description:
      'We follow strict safety protocols to keep you and your home secure.',
  },
];

const OurImpact: React.FC = () => {
  return (
    <section className='bg-[#FFF8E6] text-black py-16 px-4 md:px-20'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <h2 className='text-3xl font-semibold mb-4'>Our Impact So Far</h2>
        <p className='text-md text-gray-700'>
          At Nations Gas, we’re more than just a gas plant — we’re your trusted
          partner for safe, reliable, and convenient cooking gas solutions.
          Whether you’re a busy parent, a food vendor, or setting up your first
          kitchen, we make it easy to get quality gas, equipment, and
          professional installation — all in one place.
        </p>
      </div>

      <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
        {impactData.map((item, index) => (
          <div key={index} className='text-center px-16'>
            <img
              className='text-4xl mb-4 w-[40px] h-[40px] mx-auto '
              src={item.icon}
            />
            <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
            <p className='text-sm text-gray-700'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
