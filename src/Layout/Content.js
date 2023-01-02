import React, { useEffect } from 'react';
import gsap from 'gsap';

function Content({ activeData, swatchData }) {
  useEffect(() => {
    gsap.to('p', {
      color: activeData.headingColor,
      ease: 'power3.inOut',
      duration: 0.8,
    });

    gsap.from('.text', {
      y: 600,
      ease: 'power3.inOut',
      duration: 1.5,
      stagger: {
        amount: 0.3,
      },
    });
    return () => {};
  });
  return (
    <div className='select-none w-full flex justify-center items-center lg:w-1/2 h-full lg:justify-end'>
      <div className='flex justify-start flex-col items-start w-3/4'>
        <div className='text-left text-xl font-extralight w-full p-1 overflow-hidden md:text-3xl'>
          <p className='text'>{activeData.subHeading}</p>
        </div>
        <div className='text-left text-5xl font-bold mb-1 w-full relative p-1 overflow-hidden md:text-[4vw] md:mb-2 tracking-wider'>
          <p className='text'>{activeData.heading}</p>
        </div>
        <div className='w-full text-sm font-medium text-left mb-8 p-1 overflow-hidden md:text-lg md:mb-10 capitalize tracking-widest'>
          <p className='text'>{activeData.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
