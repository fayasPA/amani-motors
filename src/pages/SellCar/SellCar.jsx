import React, { useEffect } from 'react'
import ThreeStepForm from '../../Components/ThreeStepForm'
import { ScrollTrigger } from "gsap/all";
import { gsap } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

function SellCar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    gsap.fromTo(
      ".sellcar-header",
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
          trigger: ".sellcar-header",
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
        duration: 0.5,
        ease: "none",
        stagger: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: ".content-text",
          toggleActions: "play none none none ",
          once: true
        },
      }
    );
  }, [])

  return (
    <div className='h-auto'>

      <header
        className="sellcar-header h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/sell_carImg.jpg)",
          backgroundSize: "contain",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <span className="text-2xl md:text-3xl text-white">Sell Your Car</span>
          <p className="text-xs md:text-sm font-light text-white">YOUR OLD CAR CAN EARN YOU A JACKPOT</p>
        </div>
      </header>

      <div className="flex-1 mt-0 md:mt-10 h-80 md:h-72 p-5 "
        style={{
          backgroundImage: "url(/assets/images/sell_carsImg2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className='w-full flex h-full '>
          <div className='w-[60%] h-full md:pl-7 text-white flex flex-col justify-center'>
            <h2 className='content-text text-base md:text-xl mb-3'>A TRUSTED OFFER THAT</h2>
            <h1 className='content-text text-xl md:text-3xl  mb-3'>TRULY VALUES YOUR CAR</h1>
            <h4 className='content-text text-sm md:text-lg  mb-3' >Sell your car to us and get best instant price for it. Our scientific and data
              driven pricing method takes your cars
              condition and the market trends in account to offer you a price that truly values your car.</h4>
          </div>
          {/* <div className='w-[40%] h-full'>
            <img src="/assets/images/sell_carsImg2.jpg" alt="" className='w-full h-full' />
          </div> */}

        </div>
      </div>

      <div className='w-auto h-auto'>
        <ThreeStepForm className="w-[1000px]" />
      </div>
    </div>
  )
}

export default SellCar
