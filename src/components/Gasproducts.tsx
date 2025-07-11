import React from 'react';

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

const GasProductGrid: React.FC = () => {
  return (
    <section className='py-20 px-4 text-center bg-white'>
      <h2 className='text-2xl md:text-3xl font-semibold text-black mb-2'>
        Shop Gas Appliances and Accessories
      </h2>
      <p className='text-gray-600 mb-12 max-w-xl mx-auto text-sm md:text-base'>
        We’re committed to providing safe, reliable, and professional gas
        services you can trust
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-6xl mx-auto'>
        {products.map((product, index) => (
          <div
            key={index}
            className='border overflow-hidden shadow-lg flex flex-col justify-between'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-[256px] object-cover p-[16px]'
            />
            <div className='p-4 flex flex-col gap-2 flex-1 text-start'>
              <h3 className='font-semibold text-[18px] leading-6  text-base text-black'>
                {product.title}
              </h3>
              <p className='text-[16px] font-[400] my-3 text-gray-600 '>
                {product.description}
              </p>
            </div>
            <div className='px-4 pb-4 mt-3'>
              <button className='w-full border border-black py-3 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition '>
                Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GasProductGrid;
