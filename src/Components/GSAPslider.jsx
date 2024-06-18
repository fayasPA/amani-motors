import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { axiosAPI } from "../utils/axiosAPI";
import { BASE_IMAGE_URL, GET_BANNER_VEHICLES } from "../utils/urls";
import { Link, NavLink } from "react-router-dom";
import { capitalizeFirstLetters, capitalizeWord, getNumberToCurrencyText } from "../utils/helperFunctions";
gsap.registerPlugin(ScrollTrigger);

function GSAPslider() {
  const axiosInstance = axiosAPI();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    get_banner_data();
  }, []);
  async function get_banner_data() {
    try {
      const response = await axiosInstance.get(GET_BANNER_VEHICLES);
      if (response.status === 200) {
        setBannerData(response.data.carDetails);
        setCurrentIndex(0)
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerData]);

  useEffect(() => {
    if (bannerData.length > 0) {
      // car image gsap animation
      gsap.fromTo(
        `.car-${currentIndex}`,
        {
          x: 100,
          y: -100,
          borderRadius: "0%",
          yoyo: false,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          repeat: 0,
          yoyo: false,
          rotation: 0,
          borderRadius: "0%",
          duration: 2,
          ease: "none",
          opacity: 1,
          // scrollTrigger: {
          //   trigger: `.car-${currentIndex}`,
          //   toggleActions: "restart none none none ",
          // },
        }
      );

      // car image gsap animation ends

      // car details gsap animation
      gsap.fromTo(
        `.car-name-${currentIndex}`,
        {
          x: 0,
          y: -300,
          borderRadius: "0%",
          yoyo: false,
          rotation: 0,
          opacity: 0,
          scale: 1.5
        },
        {
          x: 0,
          y: 0,
          repeat: 0,
          yoyo: false,
          rotation: 0,
          borderRadius: "0%",
          duration: 0.8,
          ease: "bounce.out",
          stagger: .3,
          scale: 1,
          opacity: 1,
          // scrollTrigger: {
          //   trigger: `.car-${currentIndex}`,
          //   toggleActions: "restart none none none ",
          // },
        }
      );

    }
  }, [currentIndex, bannerData]);

  return (
    <div className="relative w-full h-80 md:h-96 bg-custom-background bg-cover bg-center">
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Ensure children are above the overlay */}
      <div className="relative flex justify-between w-full h-full overflow-hidden z-20">
        {bannerData.map((banner, index) => (
        <div className={`w-full h-full flex justify-between ${currentIndex === index ? "block" : "hidden"}`} key={index}>
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2 md:gap-5 pl-10 md:pl-20">
            <div className="w-full flex justify-start text-white text-xs md:text-sm font-extrabold name">
              <div className="w-1/2 md:w-1/3 border-x-2 flex justify-center">
                <div className="w-fit">
                  <p className="text-[#fff]" style={{ fontSize: '0.7em' }}>{capitalizeWord(banner.car_type)}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start h-auto">
              <p className={`car-name-${index} text-white text-xl md:text-2xl font-extrabold name`}>
                {capitalizeFirstLetters(`${banner.brand} ${banner.model}`)}
              </p>
              <div className="flex gap-2 md:gap-4">
                <p className={`car-name-${index} text-slate-500 text-xs md:text-sm font-semibold font-serif price`}>
                  MODEL {banner.year}
                </p>
                <p className={`car-name-${index} text-slate-500 text-xs md:text-sm font-bold price`}>
                  {getNumberToCurrencyText(banner.price)}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start">
              <NavLink to={`/vehicles/${banner.id}`}>
                <button onClick={() => console.log("FAYAS", banner.id)} className="bg-gradient-to-r from-gray-800 to-gray text-white font-semibold px-4 rounded-sm w-full text-xs md:text-sm">
                  See Details
                </button>
              </NavLink>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-start items-center">
            <div className={`w-auto h-auto car-${index}`}>
              <img className="w-full h-auto" src={`${BASE_IMAGE_URL}${banner.bannerImage}`} alt={banner.model} />
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>

  );
}

export default GSAPslider;
