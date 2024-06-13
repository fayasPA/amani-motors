import React, { useEffect, useState } from "react";
import img1 from "/side1.png";
import img2 from "/side2.png";
import img3 from "/sidecar3.png";
import img4 from "/sidecar4.png";
import img5 from "/sidecar5.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { axiosAPI } from "../utils/axiosAPI";
import { BASE_IMAGE_URL, GET_BANNER_VEHICLES } from "../utils/urls";
gsap.registerPlugin(ScrollTrigger);

function GSAPslider() {
  const axiosInstance = axiosAPI();

  const Imagearr = [img1, img2, img3, img4, img5];
  const PriceArr = ["₹5000000", "₹6000000", "₹7000000", "₹8000000", "₹9000000"];
  const ModelArr = [
    "Model :2018",
    "Model :2022",
    "Model :2020",
    "Model :2020",
    "Model :2021",
  ];

  const Namearr = [
    "LAMBORGINI",
    "PORCHE",
    "LAMBORGINI URUS",
    "BENZ",
    "CHEVERLOTE",
  ];
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
      console.log("---------BANNER_ERROR",error);
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Imagearr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(bannerData.length > 0){
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
          stagger: 0.5,
          opacity: 1,
          // scale: 2,
          scrollTrigger: {
            trigger: `.car-${currentIndex}`,
            toggleActions: "restart none none none ",
          },
        }
      );
      gsap.fromTo(
        `.name-${currentIndex}`,
        {
          x: -200,
          y: -200,
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
          stagger: 0.5,
          scale: 1.5,
          opacity: 1,
          scrollTrigger: {
            trigger: `.car-${currentIndex}`,
            toggleActions: "restart none none none ",
          },
        }
      );
  
      // gsap.fromTo(
      //   `.price-${currentIndex}`,
      //   {
      //     x: -400,
      //     y: 0,
      //     borderRadius: "0%",
      //     yoyo: false,
      //     rotation: 0,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     x: -200,
      //     repeat: 0,
      //     yoyo: false,
      //     rotation: 0,
      //     borderRadius: "0%",
      //     duration: 1.2,
      //     ease: "none",
      //     stagger: 0.5,
      //     scale: 1.2,
      //     opacity: 1,
      //     scrollTrigger: {
      //       trigger: `.price-${currentIndex}`,
      //       toggleActions: "restart none none none ",
      //     },
      //   }
      // );
  
      // gsap.fromTo(
      //   `.model-${currentIndex}`,
      //   {
      //     x: -500,
      //     y: 0,
      //     borderRadius: "0%",
      //     yoyo: false,
      //     rotation: 0,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     x: -300,
      //     repeat: 0,
      //     yoyo: false,
      //     rotation: 0,
      //     borderRadius: "0%",
      //     duration: 1.2,
      //     ease: "none",
      //     stagger: 0.5,
      //     scale: 1.2,
      //     opacity: 1,
      //     scrollTrigger: {
      //       trigger: `.model-${currentIndex}`,
      //       toggleActions: "restart none none none ",
      //     },
      //   }
      // );
    }
  }, [currentIndex, bannerData]);

  return (
    <div className="relative w-full h-80 md:h-screen bg-custom-background bg-cover bg-center">
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Ensure children are above the overlay */}
      <div className="flex justify-between w-full h-full overflow-hidden">
        {bannerData.map((banner, index) => (
          <div className={`w-full h-full flex justify-between ${currentIndex === index ? "block" : "hidden"}`} key={index}>
            <div
              className={`w-1/2 h-full  flex justify-center items-center `}
            >
              <div className={` h-auto w-auto pl-5 name-${index} `}>
              <p className="text-white text-xl md:text-3xl font-extrabold name">
                {banner.model}
              </p>
              <p className="text-slate-500 text-xs md:text-sm font-medium price">
                {banner.variant}
              </p>
              <p className="text-slate-500 text-sm md:text-lg font-bold price">
              ₹{banner.price}
              </p>
              </div>
              
            </div>

            <div
              className={` w-1/2 h-full  flex justify-start items-center`}
            >
              <div className={` w-auto h-auto car-${index}`}>
              <img
                className={`w-full h-auto `}
                src={`${BASE_IMAGE_URL}${banner.bannerImage}`}
                alt={banner.model}
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GSAPslider;
