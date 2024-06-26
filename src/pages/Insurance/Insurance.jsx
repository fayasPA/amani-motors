import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import MapComponent from "../../Components/MapComponent";
import { Oval } from 'react-loader-spinner'; // Import the loader component
import ins1 from "/assets/images/insurance/ins1.jpeg";
import ins2 from "/assets/images/insurance/ins2.png";
import ins3 from "/assets/images/insurance/ins3.png";
import ins4 from "/assets/images/insurance/ins4.png";
import ins5 from "/assets/images/insurance/ins5.png";

gsap.registerPlugin(ScrollTrigger);

const Insurance = () => {
    const containerRef = useRef(null);
  const slidesRef = useRef([]);
    const images = [
        ins1, ins2, ins3, ins4, ins5
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo(
            ".insurance-header",
            {
                y: -200,
                borderRadius: "0%",
                yoyo: false,
                rotation: 0,
                opacity: 0,
            },
            {
                y: 0,
                repeat: 0,
                delay: 0,
                yoyo: false,
                rotation: 0,
                borderRadius: "0%",
                duration: 0.7,
                ease: "none",
                stagger: 0.5,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".insurance-header",
                    toggleActions: "play none none none ",
                    once: true
                },
            }
        );

        gsap.fromTo(
            ".content-text",
            {
                y: 0,
                borderRadius: "0%",
                yoyo: false,
                rotation: 0,
                opacity: 0,
            },
            {
                y: 0,
                repeat: 0,
                delay: 1,
                yoyo: false,
                rotation: 0,
                borderRadius: "0%",
                duration: 1,
                ease: "none",
                stagger: 0.3,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".content-gsap-trigger",
                    toggleActions: "play none none none ",
                    once: true
                },
            }
        );

        gsap.to(".about-section", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
            opacity: 1,
            y: 0,
            duration: 1
        });

    }, []);

    useEffect(() => {
        const slides = slidesRef.current;
        let currentSlide = 0;
        const totalSlides = slides.length;
      
        const timeline = gsap.timeline({ repeat: -1 });
        timeline.to(slides[currentSlide], { opacity: 1, duration: 1, ease: "expo.inOut" });
      
        slides.forEach((slide, index) => {
          if (index !== 0) {
            timeline.to(slide, { opacity: 1, duration: 1, ease: "expo.inOut" }, `+=5`); // 5 seconds delay before the next slide appears
          }
          timeline.to(slide, { opacity: 0, duration: 1, ease: "expo.inOut" }, `+=4`); // 4 seconds delay before the current slide fades out
        });
      
      }, []);

    return (
        <div className="h-auto about-section">


            <header
                className="insurance-header h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/images/insurance/insurance_header.jpg)"
                }}
            >
                <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <span className="text-sm md:text-xl text-white">MORE THAN
                        JUST A CAR INSURANCE</span>
                    <p className="text-xs md:text-sm font-light text-white">SOLUTIONS FOR EVERYTHING THAT YOUR CAR NEEDS</p>
                </div>
            </header>

            <div className="flex-1  py-5 bg-white h-full p-5">

                <div className="flex flex-col text-center text-black justify-start content-gsap-trigger">
                    <p className="font-light text-sm md:text-base">BUYING CAR INSURANCE FROM</p>
                    <h2 className="text-lg md:text-xl font-bold content-text">
                        AMANI MOTORS IS SIMPLE
                    </h2>
                </div>


                <div className="text-black my-10 grid grid-cols-2 md:grid-cols-5 gap-4 h-auto md:h-32">
                    {images.map((src, index) => (
                        <div key={index} className="bg-cover h-20 md:h-full w-auto group rounded-xl bg-center mb-2 md:mb-0 overflow-hidden mx-auto">
                            <img
                                src={src}
                                alt={`showroom_image${index}`}
                                className='h-[100%] w-full md:w-auto'
                            />
                        </div>
                    ))}
                </div>

                <div className="text-black flex justify-center px-5 pb-5">
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg ">
                        <h2 className="text-xs md:text-sm font-semibold text-gray-500">AMANI MOTORS</h2>
                        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">ADVANTAGE</h1>
                        <div className="flex items-center bg-white rounded-full shadow p-2 px-4 space-x-4">
                            <span className="text-xs md:text-sm font-medium text-gray-800">SIMPLE</span>
                            <span className="text-xs md:text-sm font-medium text-gray-800">●</span>
                            <span className="text-xs md:text-sm font-medium text-gray-800 text-center">EASY CLAIM</span>
                            <span className="text-xs md:text-sm font-medium text-gray-800">●</span>
                            <span className="text-xs md:text-sm font-medium text-gray-800">AFFORDABLE</span>
                        </div>
                    </div>
                </div>



{/* carousal */}
<div ref={containerRef} className="relative overflow-hidden w-full h-screen bg-gray-50">
    <div ref={el => (slidesRef.current[0] = el)} className="absolute inset-0 opacity-0">
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/images/insurance/ins_carousal1.jpg"
                alt="Easy Claim Settlements"
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-2">EASY CLAIM SETTLEMENTS</h2>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">RAPID, HASSLE FREE CLAIMS</h1>
              <p className="text-gray-600 mb-4">
                It's time-saving, you will find yourself in a comfortable zone towards your car insurance purchase without any commotion.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-bold">✔</span> 24/7 Customer Service Helpline from Insurer
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Hassle free Inspection
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Instant Claim Assistance and SMS updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref={el => (slidesRef.current[1] = el)} className="absolute inset-0 opacity-0">
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/images/insurance/ins_carousal2.jpg"
                alt="Easy Claim Settlements"
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-2">AFFORDABLE</h2>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">BUY CHEAP, ADD VALUE</h1>
              <p className="text-gray-600 mb-4">
                It's time-saving, you will find yourself in a comfortable zone towards your car insurance purchase without any commotion.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-bold">✔</span> Discount offers for long term buyers
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Budget savers that adds value
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Instant Claim Assistance and SMS updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref={el => (slidesRef.current[2] = el)} className="absolute inset-0 opacity-0">
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/images/insurance/ins_carousal3.png"
                alt="Easy Claim Settlements"
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-2">SIMPLE</h2>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">FLEXIBLE WAYS TO GET INSURED</h1>
              <p className="text-gray-600 mb-4">
                We give you the most adaptable ways to select one of the various options available to get your car insurance done.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-bold">✔</span> Multiple Insurance Options Available
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Periodical Evaluation Options
                </li>
                <li className="mb-2">
                  <span className="font-bold">✔</span> Comprehensive Cover for better Insurance Coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* carousal */}


            </div>
        </div>
    );
};

export default Insurance;
