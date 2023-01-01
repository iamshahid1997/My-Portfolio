import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Content from './Content';
import { data } from '../data';
import Lottie from 'react-lottie';
import animationData from '../assets/loading.json';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Banner() {
  const banner = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === 0) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(0);
      }
    }, 8000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    gsap.from('.logo', {
      opacity: 0,
      ease: 'power3.inOut',
      duration: 0.8,
    });
  }, []);

  useEffect(() => {
    gsap.to(banner.current, {
      background: data[currentIndex].background,
      ease: 'power3.inOut',
      duration: 0.8,
    });
  }, [currentIndex]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return loading ? (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  ) : (
    <div ref={banner} className='w-screen h-screen relative'>
      <div className='logo absolute my-2 ml-6 text-left text-2xl font-bold tracking-widest md:ml-28 lg:ml-[12vw] lg:my-8'>
        Hi THERE.
      </div>
      <div className='w-full h-full flex justify-between items-center'>
        <div className='w-full relative z-10 h-full'>
          <div className='absolute w-full h-full left-0 top-0'>
            <Content activeData={data[currentIndex]} />
          </div>

          <div className='w-full h-full overflow-hidden select-none lg:ml-32'>
            <Spline
              scene='https://prod.spline.design/UqUTGdSMuC1WsCBq/scene.splinecode'
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
