import React, { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "/assets/images/new_logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from 'gsap/all';
import {
  FaCalculator,
  FaCar,
  FaCarSide,
  FaHome,
  FaImage,
} from "react-icons/fa";
import { FaCableCar, FaHelmetSafety, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {

  const [nav, setNav] = useState(false)
  const phoneNumber = "+919037696969"
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = (path) => {
    handleNav();
    navigate(path);
  };

  useEffect(() => {
    if (nav) {
      gsap.fromTo(
        ".sm-navbar",
        {
          x: 0,
          y: '-200%',
          borderRadius: "0%",
          yoyo: false,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          repeat: 0,
          yoyo: true,
          rotation: 0,
          borderRadius: "0%",
          duration: 0.5,
          ease: "none",
          stagger: 0.2,
          opacity: 1,
          scrollTrigger: {
            trigger: ".sm-navbar",
            toggleActions: "play none none none",
            once: true
          },
        }
      );
    }
  }, [nav]);


  return (
    <nav className="flex-1  border-gray-200 w-[100%] py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 ">

        {/* Logo */}
        <Link to="/" className="flex items-center rtl:space-x-reverse">
          <img src={Logo} className="w-20 h-w-12  md:w-44 md:h-20 rounded-xl logo " alt=" Logo" />
        </Link>
        {/* Logo */}

        <div className=" hidden md:flex ">
          <div className="flex justify-center gap-2">
            <a href="https://wa.me/919037696969" target='blank'>
              <FaWhatsapp size={20} className="text-white cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/people/Amani-Motors/61555223155190/" target='blank'>
              <FaFacebook size={20} className="text-white cursor-pointer" />
            </a>
            {/* <FaTwitter className="text-white w-6 h-6 cursor-pointer" /> */}
            <a href="https://www.youtube.com/watch?v=D3kcFp9i_cE" target='blank'>
              <FaYoutube size={20} className="text-white cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/amani_motors/" target='blank'>
              <FaInstagram size={20} className="text-white cursor-pointer" />
            </a>
            <a href={`tel:${phoneNumber}`} className='pl-1'>
              <p className="flex items-center text-white ">
                <FiPhone size={18} className="text-white cursor-pointer" /> +91-9037696969
              </p>
            </a>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className='block md:hidden '>
          <button
            className={`w-11 menu-trigger ${nav ? 'menu-close' : 'h-10'}`}
            onClick={handleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* For smaller screens */}

        {/* Left to right navbar */}
        {/* <div className={nav ? "z-30 flex md:hidden fixed left-0 top-0 w-[80%]  h-screen bg-[black]/75 backdrop-blur-sm ease-in-out duration-500" : "fixed left-[-100%]"}>
          <ul className="font-bold  uppercase h-full flex flex-col flex-wrap justify-center items-center gap-7 w-full text-white">
            <li className="p-3 w-full text-sm">
              <NavLink to='/' onClick={() => handleNavClick('/')} className={`flex gap-5 justify-center items-start text-center`} >
                <FaHome size={20} className='' />
                <span className=" ">HOME</span>
              </NavLink>
            </li>
            <li className="p-3 w-full text-sm">
              <NavLink to='/vehicles' onClick={() => handleNavClick('/vehicles')} className={`flex gap-5 justify-center items-start text-center`} >
                <FaCarSide size={20} className='' />
                <span className=" ">Stock Cars</span>
              </NavLink>
            </li>
            <li className="p-3 w-full text-sm">
              <NavLink to='/sellcar' onClick={() => handleNavClick('/sellcar')} className={`flex gap-5 justify-center items-start text-center`} >
                <FaCar size={20} className='' />
                <span className=" ">Sell Cars</span>
              </NavLink>
            </li>
            <li className="p-3 w-full text-sm">
              <NavLink to='/gallery' onClick={() => handleNavClick('/gallery')} className={`flex gap-5 justify-center items-start text-center`} >
                <FaImage size={20} className='' />
                <span className=" ">Gallery</span>
              </NavLink>
            </li>
            <li className="p-3 w-full text-sm">
              <NavLink to='/about' onClick={() => handleNavClick('/about')} className={`flex gap-5 justify-center items-start text-center`} >
                <FaHelmetSafety size={20} className='' />
                <span className=" ">About Us</span>
              </NavLink>
            </li>
          </ul>
        </div> */}
        {/* Hamburger Menu */}

      </div>

      <div className={`sm-navbar w-full ${nav ? 'block' : 'hidden'}`}
      >
        <ul className={`items-center justify w-full md:flex 
        md:w-auto md:order-1 gap-3`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className='flex'>
              <ul className=" p-4 font-bold  uppercase h-full flex flex-col justify-center items-center gap-7 w-full text-white">
                
                {/* Search field */}
                {/* <li className="sm-navbar p-3 w-full text-xs">
                  <div className='flex gap-5'>
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-[80%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Search..."
                    />
                    <button>Search</button>
                  </div>
                </li> */}
                <li className="sm-navbar p-3 px-7 w-full text-xs">
                  <NavLink to='/' onClick={() => handleNavClick('/')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaHome size={20} className='w-4 h-4' />
                    <span className=" ">HOME</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/vehicles' onClick={() => handleNavClick('/vehicles')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaCarSide size={20} className='w-4 h-4' />
                    <span className=" ">Stock Cars</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/sellcar' onClick={() => handleNavClick('/sellcar')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaCar size={20} className='w-4 h-4' />
                    <span className=" ">Sell Cars</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/showroom' onClick={() => handleNavClick('/showroom')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaShop size={20} className='w-4 h-4' />
                    <span className=" ">Showroom</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/gallery' onClick={() => handleNavClick('/gallery')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaImage size={20} className='w-4 h-4' />
                    <span className=" ">Gallery</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/insurance' onClick={() => handleNavClick('/insurance')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaHelmetSafety className='w-4 h-4' />
                    <span className=" ">Insurance</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/emi-calculator' onClick={() => handleNavClick('/emi-calculator')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaCalculator className='w-4 h-4' />
                    <span className=" ">EMI Calculator</span>
                  </NavLink>
                </li>
                <li className="sm-navbar p-3 w-full text-xs">
                  <NavLink to='/about' onClick={() => handleNavClick('/about')} className={({ isActive }) =>`${isActive ? 'scale-110 border-x-2' : ''} flex gap-5 justify-center items-start text-center`} >
                    <FaPeopleGroup className='w-4 h-4' />
                    <span className=" ">About Us</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

        </ul>
      </div>

      {/* For smaller screens ends */}

    </nav>
  );
}
