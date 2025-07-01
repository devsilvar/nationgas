import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section
      className='relative inset-0 lg:h-[500px] h-[400px]'
      style={{
        backgroundImage: "url('/Hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute lg:left-16 left-7 top-1/2 -translate-y-1/2 max-w-[90%] lg:max-w-[58%]'>
        <p className='lg:text-[50px] text-[30px] font-bold text-white  leading-relaxed lg:leading-normal mb-4'>
          Buy Gas, Shop Equipment, <br />
          And Book A Home <br /> Installation, All In One Place
        </p>
        <Button className='py-3 w-[40%] bg-[#FDE056] text-black border text-lg border-black rounded-[10px] px-4'>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
