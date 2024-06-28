import React, { useEffect, useState } from "react";
import {
  FaCalculator,
  FaCar,
  FaCarSide,
  FaHome,
  FaImage,
} from "react-icons/fa";
import { FaCableCar, FaHelmetSafety, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function SecondHeader() {
  useEffect(() => {
    gsap.fromTo(
      ".sid-nav-bar-content",
      {
        x: '-100%',
        y: 0,
        yoyo: true,
        rotation: 45,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        repeat: 0,
        delay: 0.9,
        yoyo: false,
        rotation: 0,
        duration: 0.7,
        ease: "power1.in",
        stagger: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".nav-bar-div",
          toggleActions: "play none none none ",
          once: true
        },
      }
    );
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-20 h-screen bg-red-600 nav-bar-div">
      <div
        className={` hidden md:flex fixed bg-gray-900 flex-col h-screen w-20 justify-between text-xs md:text-sm`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc flex flex-col h-full gap-1 justify-center items-center`
          }
        >
          <FaHome className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center">HOME</span>
        </NavLink>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc flex flex-col gap-1 h-full justify-center items-center`
          }
        >
          <FaCarSide className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">STOCK CARS</span>
        </NavLink>
        <NavLink
          to="/sellcar"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaCar className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">SELL CARS</span>
        </NavLink>
        <NavLink
          to="/showroom"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaShop className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">SHOWROOM</span>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaImage className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">GALLERY</span>
        </NavLink>
        <NavLink
          to="/insurance"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaHelmetSafety className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">INSURANCE</span>
        </NavLink>
        <NavLink
          to="/emi-calculator"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaCalculator className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex flex-col justify-center items-center ">
            EMI<p>CALCULATOR</p>
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? 'bg-zinc text-white' : 'text-gray-500'} sid-nav-bar-content hover:text-white px-1 py-2 hover:bg-zinc h-full flex flex-col gap-1 justify-center items-center`
          }
        >
          <FaPeopleGroup className="text-xl " />
          <span style={{fontSize: '10px'}} className="text-center flex justify-center ">ABOUT US</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SecondHeader;
