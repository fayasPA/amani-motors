import React, { useEffect, useState } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import MapComponent from "../../Components/MapComponent";
import { Oval } from 'react-loader-spinner'; // Import the loader component
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    director1: false,
    director2: false,
    director3: false
  }); // State to track image loading

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    // Set a timeout to simulate image loading for each director's image
    const imageLoadTimeouts = [
      setTimeout(() => setImagesLoaded(prevState => ({ ...prevState, director1: true })), 2000),
      setTimeout(() => setImagesLoaded(prevState => ({ ...prevState, director2: true })), 3000),
      setTimeout(() => setImagesLoaded(prevState => ({ ...prevState, director3: true })), 4000)
    ];

    // Clean up the timeouts to prevent memory leaks
    return () => imageLoadTimeouts.forEach(timeout => clearTimeout(timeout));
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
          <h2 className="font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Directors</h2>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-5 md:gap-10 px-5 py-3 pb-10 w-full justify-center items-center">
          <div className="max-w-sm w-full md:w-1/3 block justify-center rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0]">
            {!imagesLoaded.director1 ? (
              <div className="flex justify-center py-5">
                <Oval
                  height={40}
                  width={40}
                  color="grey"
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#ccc"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            ) : (
              <img
                className="rounded-t-lg"
                src="/assets/images/about_us/rajagopal.jpeg"
                alt=""
                onLoad={() => setImagesLoaded(prevState => ({ ...prevState, director1: true }))}
              />
            )}
            <div className="p-6 text-black">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Dr. Rajeev Rajagopalan
              </h5>
            </div>
          </div>

          <div className="max-w-sm w-full md:w-1/3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0]">
            {!imagesLoaded.director2 ? (
              <div className="flex justify-center py-5">
              <Oval
                height={40}
                width={40}
                color="grey"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#ccc"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
            ) : (
              <img
                className="rounded-t-lg"
                src="/assets/images/about_us/ameen_ali.jpeg"
                alt=""
                onLoad={() => setImagesLoaded(prevState => ({ ...prevState, director2: true }))}
              />
            )}
            <div className="p-6 text-black">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Ameen Ali
              </h5>
            </div>
          </div>

          <div className="max-w-sm w-full md:w-1/3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_#d1d1d1,0_10px_20px_-2px_#e0e0e0]">
            {!imagesLoaded.director3 ? (
              <div className="flex justify-center py-5">
              <Oval
                height={40}
                width={40}
                color="grey"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#ccc"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
            ) : (
              <img
                className="rounded-t-lg"
                src="/assets/images/about_us/maniKutan.jpeg"
                alt=""
                onLoad={() => setImagesLoaded(prevState => ({ ...prevState, director3: true }))}
              />
            )}
            <div className="p-6 text-black">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                Mani Kuttan
              </h5>
            </div>
          </div>

        </div>

        {/* Rest of your content */}
        
        <div className="h-36 mt-10  achievement">
          <div className="flex h-full">
            {/* Achievement content */}
          </div>
        </div>

        <div className="bg-white w-full h-80 py-5">
          <MapComponent />
        </div>

      </div>
    </div>
  );
};

export default About;
