import React from 'react';

const BusinessInfoCards: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 my-9 justify-center items-start lg:w-[80%] mx-auto p-4'>
      {/* Business Hours Card */}
      <div className='w-full md:w-1/2 bg-white border border-gray-200 rounded-md shadow-sm p-5'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='bg-pink-100 p-3 rounded-[23.5px] '>
            <img src='/call.svg' />
          </div>
          <h3 className='text-[24px] font-semibold text-gray-800'>
            Business Hours
          </h3>
        </div>

        <ul className='space-y-4 text-sm text-gray-700 my-8'>
          <li className='flex justify-between text-[18px] leading-6 border rounded-md border-gray-200 shadow-lg px-4 py-3'>
            <span>Monday – Friday</span>
            <span>8:00 AM – 8:00 PM</span>
          </li>
          <li className='flex justify-between text-[18px] leading-6 border rounded-md border-gray-200 shadow-lg px-4 py-3'>
            <span>Saturday</span>
            <span>8:00 AM – 8:00 PM</span>
          </li>
          <li className='flex justify-between text-[18px] leading-6 border rounded-md border-gray-200 shadow-lg px-4 py-3'>
            <span>Sunday</span>
            <span>8:00 AM – 8:00 PM</span>
          </li>
        </ul>
      </div>

      {/* Location Card */}
      <div className='w-full md:w-1/2 bg-white border border-gray-200 rounded-md shadow-sm p-5'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='bg-pink-100 p-3 rounded-[23.5px] '>
            <img src='/location.svg' />
          </div>
          <h3 className='text-lg font-semibold text-gray-800'>
            Visit Our Location
          </h3>
        </div>

        <div className='text-[18px] text-gray-800 space-y-1 mt-9 mb-5'>
          <p className=' leading-6'>
            <strong>Nations Gas Headquarters</strong>
          </p>
          <p>123 Gas Street</p>
          <p>City Center, State 12345</p>
        </div>

        <button className='bg-black font-semibold lg:w-[50%] text-[18px] px-8 text-white text-sm py-2 rounded-md hover:opacity-90 transition'>
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default BusinessInfoCards;
