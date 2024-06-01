import React, { useEffect } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      ".individualDirectors",
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
        borderRadius: "0%",
        duration: 0.7,
        ease: "none",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".individualDirectors",
          toggleActions: "restart none none none ",
        },
      }
    );

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
      ".gsapabout",
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
    <div className="h-auto py-5 about-section">
      <header
        className="aboutus h-64 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center opacity-80"
        style={{
          backgroundImage: "url(/src/assets/images/about_us/aboutUsBg2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span>About us</span>
        <p className="text-sm font-extralight">House of used cars</p>
      </header>
      <div className="flex-1 bg-white h-full p-5">
        <div className="text-black flex justify-center directors">
          <h2 className="text-lg md:text-xl font-bold">DIRECTORS</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-5 py-3 pb-10 w-full justify-center items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/3 h-80 md:h-60 individualDirectors">
            <img
              src="/src/assets/images/about_us/rajagopal.jpeg"
              className="w-full h-[80%]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="text-xs md:text-sm mb-2 text-black font-normal">
                Dr. Rajeev Rajagopalan
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/3 h-80 md:h-60 individualDirectors">
            <img
              src="/src/assets/images/about_us/ameen_ali.jpeg"
              className="w-full h-[80%]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="text-xs md:text-sm mb-2 text-black font-normal">
                Ameen Ali
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/3 h-80 md:h-60 individualDirectors">
            <img
              src="/src/assets/images/about_us/maniKutan.jpeg"
              className="w-full h-[80%]"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="text-xs md:text-sm mb-2 text-black font-normal">
                Mani Kuttan
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
               text-gray-700 mr-2 mb-2"
              >
                #photography
              </span>
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 
              font-semibold text-gray-700 mr-2 mb-2"
              >
                #travel
              </span>
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm 
              font-semibold text-gray-700 mr-2 mb-2"
              >
                #winter
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center text-black justify-start GSAPabt">
          <p className="font-light">Experience the</p>
          <h2 className="text-lg md:text-xl font-bold gsapabout">
            AUTO BEST EMPERIO DIFFERENCE
          </h2>
        </div>
        <div className="text-black flex justify-start pl-5">
          <h2 className="text-lg font-medium gsapabout">Our Forte</h2>
        </div>

        <div className="text-black flex">
          <ul className="text-gray pl-14 list-disc text-xs gsapabout">
            <li>No Accidental Cars</li>
            <li>No Odometer Tampered</li>
            <li>No Hidden Cost</li>
            <li>No Processing Fee</li>
          </ul>
        </div>

        <div className="text-black flex justify-start pl-5 pt-5">
          <h2 className="text-lg font-medium gsapabout">Our Vision</h2>
        </div>

        <div className="text-black flex">
          <p className="text-gray pl-14 list-disc text-xs gsapabout">
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
              "url(/src/assets/images/about_us/user_count_bg.jpg)",
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
