import React, { useEffect } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {

    gsap.fromTo(
      ".aboutus",
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
          trigger: ".aboutus",
          toggleActions: "restart none none none ",
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
          trigger: ".GSAPabt",
          toggleActions: "restart none none none ",
        },
      }
    );

    gsap.fromTo(
      ".achievement",
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
          trigger: ".achievement",
          toggleActions: "restart none none none ",
        },
      }
    );

    gsap.to(".about-section", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
      opacity: 1,
      y: 0,
      duration: 1
    });
  }, []);

  return (
    <div className="h-auto about-section">
      <header
        className="aboutus h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center opacity-80"
        style={{
          backgroundImage: "url(/assets/images/about_us/aboutUsBg2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span>About us</span>
        <p className="text-sm font-extralight">House of used cars</p>
      </header>
      <div className="flex-1  py-5 bg-white h-full p-5">
        <div className="text-black flex justify-center directors">
          <h2 className="text-lg md:text-xl font-bold">DIRECTORS</h2>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-5 md:gap-10 px-5 py-3 pb-10 w-full justify-center items-center">

          <div className="max-w-sm w-full md:w-1/3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0]">
              <img
                className="rounded-t-lg"
                src="/assets/images/about_us/rajagopal.jpeg"
                alt="" />
            <div className="p-6 text-black">
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Dr. Rajeev Rajagopalan
              </h5>
              {/* <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_#60a5fa,0_4px_18px_0_#93c5fd] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_#60a5fa,0_4px_18px_0_#93c5fd] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_#60a5fa,0_4px_18px_0_#93c5fd] dark:shadow-[0_4px_9px_-4px_#3b82f6] dark:hover:shadow-[0_8px_9px_-4px_#93c5fd,0_4px_18px_0_#bfdbfe] dark:focus:shadow-[0_8px_9px_-4px_#93c5fd,0_4px_18px_0_#bfdbfe] dark:active:shadow-[0_8px_9px_-4px_#93c5fd,0_4px_18px_0_#bfdbfe]">
              Button
            </button> */}
            </div>
          </div>

          <div className="max-w-sm w-full md:w-1/3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0] ">
              <img
                className="rounded-t-lg"
              src="/assets/images/about_us/ameen_ali.jpeg"
                alt="" />
            <div className="p-6 text-black">
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Ameen Ali
              </h5>
            </div>
          </div>

          <div className="max-w-sm w-full md:w-1/3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0] ">
              <img
                className="rounded-t-lg"
              src="/assets/images/about_us/maniKutan.jpeg"
                alt="" />
            <div className="p-6 text-black">
              <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Mani Kuttan
              </h5>
            </div>
          </div>

        </div>

        <div className="flex flex-col text-center text-black justify-start GSAPabt">
          <p className="font-light">Experience the</p>
          <h2 className="text-lg md:text-xl font-bold content-text">
            AMANI MOTORS DIFFERENCE
          </h2>
        </div>
        <div className="text-black flex justify-start pl-5">
          <h2 className="text-lg font-medium content-text">Our Forte</h2>
        </div>

        <div className="text-black flex">
          <ul className="text-gray pl-14 list-disc text-xs content-text">
            <li>No Accidental Cars</li>
            <li>No Odometer Tampered</li>
            <li>No Hidden Cost</li>
            <li>No Processing Fee</li>
          </ul>
        </div>

        <div className="text-black flex justify-start pl-5 pt-5">
          <h2 className="text-lg font-medium content-text">Our Vision</h2>
        </div>

        <div className="text-black flex">
          <p className="text-gray pl-14 list-disc text-xs content-text">
            Our Mission is to simply be the best in every area of our business.
            We will accomplish this by providing the most exceptional customer
            experience, being the best place to work, and strongly supporting
            our community, all while working together
          </p>
        </div>

        <div
          className="h-36 mt-10  achievement"
          style={{
            backgroundImage:
              "url(/assets/images/about_us/user_count_bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-full">
            <div className="w-1/3 h-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg md:text-2xl">250+</span>
              <h3 className="font-thin text-xs md:text-lg">
                Exclusive Variant
              </h3>
            </div>
            <div className="w-1/3 h-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg md:text-2xl">50+</span>
              <h3 className="font-thin text-xs md:text-lg">
                Luxury Car Brands
              </h3>
            </div>
            <div className="w-1/3 h-full flex flex-col justify-center items-center">
              <span className="font-bold text-lg md:text-2xl">2500+</span>
              <h3 className="font-thin text-xs md:text-lg">Happy Clients</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
