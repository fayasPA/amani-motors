import React, { useEffect, useState } from "react";
import {
  FaCalculator,
  FaCar,
  FaCarSide,
  FaHome,
  FaImage,
} from "react-icons/fa";
import { FaCableCar, FaHelmetSafety, FaShop } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function SecondHeader() {
  useEffect(() => {
    gsap.fromTo(
      ".comp",
      {
        x: 0,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity: 0,
      },
      {
        x: 0,
        repeat: 0,
        delay: 0.9,
        yoyo: false,
        rotation: 0,
        borderRadius: "25%",
        duration: 0.7,
        ease: "none",
        stagger: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".comp",
          toggleActions: "restart none none none ",
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
    <div className="w-full">
      <div
        className={`hidden md:flex fixed bg-gray-900 h-screen  flex-col  justify-between py-2 text-xs md:text-sm`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaHome className="text-xl " />
          <span className="text-xs">HOME</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaCarSide className="text-xl " />
          <span className="text-xs flex justify-center ">STOCK CARS</span>
        </NavLink>
        <NavLink
          to="/sellcar"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaCar className="text-xl " />
          <span className="text-xs flex justify-center ">SELL CARS</span>
        </NavLink>
        <NavLink
          to="/showroom"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaShop className="text-xl " />
          <span className="text-xs flex justify-center ">SHOWROOM</span>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaImage className="text-xl " />
          <span className="text-xs flex justify-center ">GALLERY</span>
        </NavLink>
        <NavLink
          to="/insurance"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaHelmetSafety className="text-xl " />
          <span className="text-xs flex justify-center ">INSURANCE</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaHelmetSafety className="text-xl " />
          <span className="text-xs flex justify-center ">ABOUT US</span>
        </NavLink>
        <NavLink
          to="/emi"
          className={({ isActive }) =>
            `${isActive ? 'bg-gray-200 text-white' : 'text-gray-500'} hover:text-white px-1 py-2 hover:bg-gray-200 flex flex-col justify-center items-center`
          }
        >
          <FaCalculator className="text-xl " />
          <span className="text-xs flex flex-col justify-center items-center ">
            EMI<p>CALCULATOR</p>
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SecondHeader;
