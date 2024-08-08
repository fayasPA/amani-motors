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
        className="aboutus h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/about_us/aboutUsBg2.jpg)"
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <span className="text-2xl md:text-3xl text-white">About us</span>
          <p className="text-xs md:text-sm font-light text-white">House of used cars</p>
        </div>
      </header>

      <div className="flex-1  py-5 bg-white h-full p-5">
        <div className="text-black flex justify-center directors">
          <h2 className="font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Directors</h2>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-5 md:gap-10 px-5 py-3 pb-10 w-full justify-center items-center">
          

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
                Muhammad Ameen
              </h5>
            </div>
          </div>


        </div>

        <div className="flex flex-col text-center text-black justify-start content-gsap-trigger">
          <p className="font-light">Experience the</p>
          <h2 className="text-lg md:text-xl font-bold content-text">
            AMANI MOTORS DIFFERENCE
          </h2>
        </div>
        <div className="text-black flex justify-start pl-5">
          <h2 className="text-lg font-medium content-text">Our Forte</h2>
        </div>

        <div className="text-black flex">
          <ul className="text-gray pl-14 list-disc text-sm content-text">
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
          <p className="text-gray pl-14 list-disc text-sm content-text">
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

        <div className="bg-white w-full h-80 py-5">
          <MapComponent />
        </div>

      </div>
    </div>
  );
};

export default About;
