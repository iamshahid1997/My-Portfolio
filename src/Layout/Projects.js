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

  const [currentProject, setCurrentProject] = useState(0);

  //   const [activeData, setActiveData] = useState(projectData[0]);

  function handleSwatchClicked(item) {
    setCurrentProject(item.id - 1);
  }

//   useEffect(() => {
//     const ContainerInterval = setInterval(() => {
//       if (currentProject !== 3) {
//         setCurrentProject((prev) => prev + 1);
//       } else {
//         setCurrentProject(0);
//       }
//     }, 8000);
//     return () => clearInterval(ContainerInterval);
//   }, [currentProject]);

  useEffect(() => {
    gsap.from('.title', {
      opacity: 0,
      ease: 'power3.inOut',
      duration: 0.8,
    });
  }, []);

  useEffect(() => {
    gsap.from(containerRef.current, {
      //   opacity: 0,
      x: -200,
      ease: 'power4.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.title', // make .panel2 the trigger
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
  }, [currentProject]);
  return (
    <div className='py-20 mb-20'>
      <p className='title text-3xl tracking-widest capitalize font-bold'>
        My PROJECTS.
      </p>
      <div className='w-screen h-auto flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-y-10 lg:gap-y-0 lg:gap-x-32 relative mt-4 lg:mt-10'>
        <div className='h-fit absolute z-20 w-full bottom-[-70px] flex justify-center gap-8 mb-2 lg:w-fit lg:flex-row items-center'>
          {projectData.map((data) => (
            <SwatchCircle
              key={data.id}
              item={data}
              handleClick={handleSwatchClicked}
              activeId={projectData[currentProject].id}
            />
          ))}
        </div>
        <div
          ref={containerRef}
          className={`lg:w-1/2 lg:h-2/3 shadow-inner p-4 lg:p-8 rounded-xl lg:ml-10 mx-3 lg:mx-0`}
          style={{ backgroundColor: projectData[currentProject].swatchColor }}
        >
          <img
            ref={imgRef}
            src={projectData[currentProject].image}
            alt='Portfolio'
            className='lg:ml-20 shadow-2xl object-cover rounded-xl hover:scale-110 transition-all duration-300'
            style={{
              border: `2px solid ${projectData[currentProject].swatchColor}`,
            }}
          />
        </div>
        <div className='flex flex-col gap-y-2 lg:items-start w-2/3'>
          <div
            className='text-3xl relative font-thin capitalize tracking-widest hover:scale-110 transition-all duration-300 overflow-hidden'
            style={{ color: projectData[currentProject].swatchColor }}
          >
            <a
              href={projectData[currentProject].website}
              target='_blank'
              rel='noreferrer'
              className='flex gap-x-2 items-center'
            >
              <AiOutlineLink />
              <span ref={textRef} className='capitalize'>
                {projectData[currentProject].title}
              </span>
            </a>
            <span
              ref={underLineRef}
              className='absolute h-2 w-full bg-gray-200 bottom-1 left-10 opacity-50'
            ></span>
          </div>
          <div className='w-5/6 flex lg:text-left ml-4 text-lg font-thin capitalize tracking-widest overflow-hidden'>
            <span>" {projectData[currentProject].description} "</span>
          </div>
          <div className='overflow-hidden animate-bounce ml-8 font-extralight flex gap-x-2 items-center capitalize tracking-widest text-gray-500 mt-3'>
            <span>
              <AiFillGithub />
            </span>
            <span>Link to my Repo.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
