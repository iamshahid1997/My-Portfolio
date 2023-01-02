import React, { useEffect, useRef } from 'react';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import next from '../assets/next.png';
import typescript from '../assets/typescript.svg';
import flutter from '../assets/flutter.png';
import node from '../assets/node.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import sass from '../assets/sass.png';
import css from '../assets/css.png';
import redux from '../assets/redux.png';
import three from '../assets/three.png';
import Gsap from '../assets/gsap.png';
import bootstrap from '../assets/bootstrap.png';
import material from '../assets/material.png';
import github from '../assets/github.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  {
    title: 'REACT JS',
    icon: react,
  },
  {
    title: 'NEXT JS',
    icon: next,
  },
  {
    title: 'TYPESCRIPT',
    icon: typescript,
  },
  {
    title: 'FLUTTER',
    icon: flutter,
  },
  {
    title: 'NODE JS',
    icon: node,
  },
  {
    title: 'JAVASCRIPT',
    icon: js,
  },
  {
    title: 'PYTHON',
    icon: python,
  },
  {
    title: 'SASS',
    icon: sass,
  },
  {
    title: 'CSS',
    icon: css,
  },
  {
    title: 'REDUX',
    icon: redux,
  },
  {
    title: 'THREE JS',
    icon: three,
  },
  {
    title: 'GSAP',
    icon: Gsap,
  },
  {
    title: 'TAILWIND',
    icon: tailwind,
  },
  {
    title: 'BOOTSTRAP',
    icon: bootstrap,
  },
  {
    title: 'MATERIAL UI',
    icon: material,
  },
  {
    title: 'GITHUB',
    icon: github,
  },
];
function Skills() {
  const boxRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < SKILLS.length; i++) {
      gsap.from(`.box${i}`, {
        x: -60,
        opacity:0,
        ease: 'power3.easeOut',
        delay: i * 1 + 0.1,
        duration: 0.1,
        
        scrollTrigger: {
          trigger: boxRef.current,
        },
      });
    }
  });
  return (
    <div className='bg-[#79716C] w-screen py-20'>
      <span className='title text-3xl tracking-widest capitalize font-bold text-white'>
        My SKILLS.
      </span>
      <div className='flex justify-center mt-16'>
        <div ref={boxRef} className='grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4'>
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className={`box${i} w-32 h-32 hover:scale-110 transition-all duration-300 bg-white  shadow-2xl flex flex-col items-center justify-center rounded-lg p-3`}
            >
              <img
                src={skill.icon}
                alt='tailwind'
                className='h-3/4 object-contain'
              />
              <h6 className='h-full text-sm tracking-wider text-gray-600 flex items-end font-bold pt-2'>
                {skill.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
