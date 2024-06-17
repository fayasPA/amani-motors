// FloatingBtn.js
import React, { useEffect, useRef, useState } from 'react';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const FloatingBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
  
    useEffect(() => {
      if (isOpen) {
        gsap.to(menuRef.current, { 
          scale: 1, 
          duration: 0.5, 
          ease: 'power4.out' 
        });
      } else {
        gsap.to(menuRef.current, { 
          scale: 0, 
          duration: 0.5, 
          ease: 'power4.out' 
        });
      }
    }, [isOpen]);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="fixed bottom-4 right-4 z-50 text-white">
        <div ref={menuRef} className={`opened-button-div flex flex-col items-center bg-gray-900 shadow-lg rounded-full p-2`} style={{ transform: 'scale(0)' }}>
          <button className="mb-2 p-2 rounded-full hover:bg-gray-200" onClick={() => window.location.href = 'tel:+919037696969'}>
            <FiPhone className="text-xl" />
          </button>
          <button className="mb-2 p-2 rounded-full hover:bg-gray-200" onClick={() => window.location.href = 'mailto:info.amanimotors@gmail.com'}>
            <FiMail className="text-xl" />
          </button>
          <button className="mb-2 p-2 rounded-full hover:bg-gray-200" onClick={() => window.location.href = 'https://wa.me/919037696969'}>
            <FaWhatsapp className="text-xl" />
          </button>
        </div>
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiPhone className="text-xl" />}
        </button>
      </div>
    );
  };
  
  export default FloatingBtn;
  
