import React from 'react';

const badges = [
  {
    text: 'Insured Services',
    position: 'md:bottom-40 bottom-36 md:left-[30%]',
  },
  {
    text: 'Quality Guaranteed',
    position: 'md:bottom-52 bottom-36 right-[4%] md:right-[32%]',
  },
  {
    text: 'Gas Safety Certified',
    position: 'md:bottom-8 bottom-10 left-[2%] md:left-1/4',
  },
  {
    text: 'Emergency Support',
    position: 'md:bottom-8 bottom-10 right-[2%] md:right-1/4',
  },
];

const SafetyPriority: React.FC = () => {
  return (
    <section className='h-[503px] relative bg-black text-white py-10 overflow-hidden text-center px-4'>
      <div className='max-w-3xl mx-auto z-10 relative'>
        <h2 className='text-2xl md:text-[32px] font-semibold mb-4'>
          Safety is Our Top Priority
        </h2>
        <h4 className='text-gray-300 text-[16px] lg:text-[17px] font-[400]  tracking-wide lg:w-[80%] mx-auto md:text-base'>
          We follow strict safety protocols in gas handling, delivery, and
          installation. All our equipment is regularly inspected, and our
          technicians are certified professionals. Your safety and satisfaction
          are guaranteed.
        </h4>
      </div>

      {/* Yellow Circle */}
      <div className='relative left-1/2 transform -translate-x-1/2 -bottom-[13%] w-[528px] h-[528px] bg-yellow-400 rounded-full -z-0' />

      {/* Floating Badges */}
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className={`absolute ${badge.position} bg-white text-black text-xs md:text-sm font-medium flex items-center gap-2 px-4 py-[10px] rounded shadow z-10`}
        >
          <img src='/check.svg' />
          {badge.text}
        </div>
      ))}
    </section>
  );
};

export default SafetyPriority;
