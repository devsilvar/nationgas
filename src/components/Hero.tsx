import Button from './Button';

const Hero = ({
  imagelink,
  pageText,
}: {
  imagelink: string;
  pageText: string;
}) => {
  return (
    <section
      className='relative inset-0 lg:h-[500px] h-[400px]'
      style={{
        backgroundImage: `url(${imagelink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute lg:left-16 left-[20%] top-1/2 -translate-y-1/2 max-w-[90%] lg:max-w-[58%]'>
        {pageText == 'Home' && (
          <>
            <p className='lg:text-[50px] lg:block hidden lg:text-start  font-semibold text-white  leading-loose lg:leading-normal mb-4'>
              Buy Gas, Shop Equipment, <br />
              And Book A Home <br /> Installation, All In One Place
            </p>
            <p className='text-[24px] w-full mx-auto  text-center lg:hidden block font-bold text-white  leading-relaxed lg:leading-normal lg:mb-4 mb-7'>
              Buy Gas, Shop <br /> Equipment, And Book <br /> A Home
              Installation,
              <br />
              All In One Place
            </p>
          </>
        )}
        {pageText == 'About' && (
          <>
            <p className='lg:text-[50px] w-[80%] lg:block hidden lg:text-start  font-semibold text-white  leading-loose lg:leading-normal mb-4'>
              Making Gas Access Easier, Safer, and Faster.
            </p>
            <p className='text-[24px] w-full mx-auto  text-center lg:hidden block font-bold text-white  leading-relaxed lg:leading-normal lg:mb-4 mb-7'>
              Making Gas Access Easier, Safer, and Faster.
            </p>
          </>
        )}

        <Button className='py-3  w-[60%] lg:w-[40%] block mx-auto lg:mx-0 bg-[#f3ce16] hover:bg-[#ffd814] text-black border text-lg border-gray-700 rounded-[10px] px-4'>
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
