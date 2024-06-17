import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from "/assets/images/logo2.png";

const Loader = ({ onExit }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(logoRef.current, {
        duration: 2,
        opacity: 1,
        ease: 'power1.inOut',
      })
      .to(
        textRef.current,
        {
          duration: 1,
          opacity: 1,
          ease: 'power1.inOut',
        },
        '-=1'
      )
      .to(
        subTextRef.current,
        {
          duration: 1,
          opacity: 1,
          ease: 'power1.inOut',
        },
        '-=0.5'
      );
  }, []);

  useEffect(() => {
    if (onExit) {
      setTimeout(() => {
        const exitTl = gsap.timeline({
          onComplete: onExit,
        });
        exitTl.to(containerRef.current, {
          y: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
        });
      }, 3000); // Delay before exit animation starts
    }
  }, [onExit]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black touch-none overflow-hidden"
    >
      <div className="flex flex-col items-center rtl:space-x-reverse w-fit mb-5 ">
        <img
          ref={logoRef}
          src={Logo}
          className="w-20 h-20 md:w-24 md:h-24 rounded-xl"
          alt="Logo"
          style={{ opacity: 0 }} // Ensure initial opacity is 0 for GSAP animation
        />
        <div className='flex flex-col h-fit'>
          <span
            ref={textRef}
            className="italic font-serif self-center text-lg md:text-xl font-bold whitespace-nowrap"
            style={{ opacity: 0 }} // Ensure initial opacity is 0 for GSAP animation
          >
            AMANI MOTORS
          </span>
          <p
            ref={subTextRef}
            style={{ fontSize: '.8em', opacity: 0 }} // Ensure initial opacity is 0 for GSAP animation
            className="mt-[-5px] italic font-serif self-center font-thin whitespace-nowrap"
          >
            Road To Luxury
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
