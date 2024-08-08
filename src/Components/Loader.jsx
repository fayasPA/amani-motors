import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import Logo from "/assets/images/logo2.png";
import Logo from "/assets/images/new_logo.png";

const Loader = ({ onExit }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(logoRef.current, {
        duration: 2,
        opacity: 1,
        ease: 'power1.inOut',
      })
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
          className="w-24 h-12 md:w-44 md:h-24 rounded-xl"
          alt="Logo"
          style={{ opacity: 0 }} // Ensure initial opacity is 0 for GSAP animation
        />
      </div>
    </div>
  );
};

export default Loader;
