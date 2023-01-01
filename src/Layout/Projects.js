import React, { useState, useEffect, useRef } from 'react';
import { projectData } from '../data';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SwatchCircle from '../Components/SwatchCircle';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const textRef = useRef(null);
  const underLineRef = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const [activeData, setActiveData] = useState(projectData[0]);

  function handleSwatchClicked(item) {
    setActiveData(item);
  }

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      x: -200,
      ease: 'power4.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current, // make .panel2 the trigger
        // start: '10% top', // 10% of .panel2 enters the bottom of the viewport
        // Whatever other ScrollTrigger vars you need here
      },
    });

    gsap.from(underLineRef.current, {
      x: 200,
      opacity: 0,
      ease: 'power4.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: underLineRef.current, // make .panel2 the trigger
        // start: '10% top', // 10% of .panel2 enters the bottom of the viewport
        // Whatever other ScrollTrigger vars you need here
      },
    });
    gsap.from('span', {
      y: -50,
      ease: 'power4.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current, // make .panel2 the trigger
        // start: '10% top', // 10% of .panel2 enters the bottom of the viewport
        // Whatever other ScrollTrigger vars you need here
      },
    });
    return () => {};
  });
  return (
    <div className='py-20'>
      <p className='text-3xl tracking-widest capitalize font-bold'>
        My PROJECTS.
      </p>
      <div className='w-screen h-auto flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-32 relative mt-4 lg:mt-10'>
        <div className='h-fit absolute z-20 w-full bottom-[-70px] flex justify-center gap-8 mb-2 lg:w-fit lg:flex-row items-center'>
          {projectData.map((data) => (
            <SwatchCircle
              key={data.id}
              item={data}
              handleClick={handleSwatchClicked}
              activeId={activeData.id}
            />
          ))}
        </div>
        <div
          ref={containerRef}
          className={`lg:w-1/2 lg:h-2/3 p-8 rounded-xl lg:ml-10 mx-3 lg:mx-0`}
          style={{ backgroundColor: activeData.swatchColor }}
        >
          <img
            ref={imgRef}
            src={activeData.image}
            alt='Portfolio'
            className='lg:ml-20 object-cover rounded-xl hover:scale-110 transition-all duration-300'
            style={{ border: `2px solid ${activeData.swatchColor}` }}
          />
        </div>
        <div className='flex flex-col gap-y-2 lg:items-start w-2/3'>
          <div
            className='text-3xl relative font-thin capitalize tracking-widest hover:scale-110 transition-all duration-300 overflow-hidden'
            style={{ color: activeData.swatchColor }}
          >
            <a
              href={activeData.website}
              target='_blank'
              rel='noreferrer'
              className='flex gap-x-2 items-center'
            >
              <span>
                <AiOutlineLink />
              </span>
              <span ref={textRef} className='capitalize'>{activeData.title}</span>
            </a>
            <span
              ref={underLineRef}
              className='absolute h-2 w-full bg-gray-200 bottom-1 left-10 opacity-50'
            ></span>
          </div>
          <div className='w-5/6 flex lg:text-left ml-4 text-lg font-thin capitalize tracking-widest overflow-hidden'>
            <span>" {activeData.description} "</span>
          </div>
          <div className='overflow-hidden animate-bounce ml-8 font-extralight flex gap-x-2 items-center capitalize tracking-widest text-gray-500 mt-3'>
            <span>
              <AiFillGithub />
            </span>
            <span>Visit my Github Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
