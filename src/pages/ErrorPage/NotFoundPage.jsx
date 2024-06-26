import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { gsap } from 'gsap';

const NotFound = () => {
  const carRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(carRef.current, { x: -500 }, { x: 500, repeat: -1, duration: 2, ease: 'linear' });
  }, []);

  return (
    <div className="text-center py-10">
      {/* <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1> */}
      <h2 className="mb-4  text-xl md:text-2xl text-gray-600">Oops! Looks like you're lost.</h2>
      <div className="flex justify-center">
        <div className='' ref={carRef}>
        <FaCarSide className="text-red-500" size={50} />
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">Let's get you back <Link to={'/'} className="text-blue">home</Link>.</p>
    </div>
  );
}

export default NotFound;
