const Footer = () => {
  return (
    <section className='h-[310px] flex lg:flex-row flex-col items-center mx-auto  lg:w-[90%] justify-between'>
      <div className='lg:me-0 p-5  me-auto lg:w-full'>
        <img src='/logo.png' className='mb-5' />
        <small className='lg:block hidden'>
          Copyright © 2025 Nation Gas All rights reserved.
        </small>
      </div>
      <div className='lg:w-[30%] w-[90%] flex-wrap items-start flex lg:flex-row flex-col justify-start gap-10 text-[18px] font-[500]'>
        <a href='/'>Services</a>
        <a href='/'>About Us</a>

        <button className='flex w-auto  items-center px-3 py-2 rounded-md gap-2 border border-gray-600'>
          {' '}
          <img src='/whatsapp.svg' className='w-6 h-6' /> Chat on Whatsapp
        </button>
      </div>
      <small className='lg:hidden block mt-3'>
        Copyright © 2025 Nation Gas All rights reserved.
      </small>
    </section>
  );
};

export default Footer;
