import React from 'react';

const Footer = () => {
  return (
    <section className='h-[310px] flex justify-between'>
      <div className=''>
        <img src='/logo.png' />
        <small>Copyright © 2025 Nation Gas All rights reserved.</small>
      </div>
      <div className='w-[40%] flex flex-wrap gap-10'>
        <p>services</p>
        <p>About Us</p>

        <button>
          {' '}
          <img src='/whatsapp.svg' /> Chat on Whatsapp
        </button>
      </div>
    </section>
  );
};

export default Footer;
