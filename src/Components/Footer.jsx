import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import Logo from "/assets/images/logo2.png"

function Footer() {
  const phoneNumber = "+919037696969"
  const email = "info.amanimotors@gmail.com"

  useEffect(() => {
    gsap.fromTo(
      ".footer",
      {
        x: 0,
        y: -100,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        repeat: 0,
        yoyo: false,
        rotation: 0,
        borderRadius: "0%",
        duration: 0.5,
        ease: "elastic.inOut",
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".divfooter",
          toggleActions: "play none none none",
          once: true
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white px-10 py-5 divfooter">

      <div className="flex flex-col items-center rtl:space-x-reverse w-fit mb-5 footer">
        <img src={Logo} className="w-14 h-w-14  md:w-12 md:h-w-12 rounded-xl logo " alt=" Logo" />
        <div className='flex flex-col h-fit'>
          <span className="italic font-serif logo self-center text-base md:text-lg font-bold whitespace-nowrap">AMANI MOTORS</span>
          <p style={{ fontSize: '.5em' }} className="mt-[-5px] italic font-serif logo self-center font-thin whitespace-nowrap">The Road To Luxury</p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="md:text-base ">


          <p className="footer">
            Pipeline Rd, Karimakkad, Thrikkakara, Edappally, Ernakulam, Kochi, Kerala 682021
          </p>
          <a href={`tel:${phoneNumber}`}>
            <p className="flex gap-2 items-center mt-4 footer">
              <FaPhone className="" /> +91 9037696969
            </p>
          </a>
          <a href={`mailto:${email}`}>
            <p className="flex gap-2 items-center mt-2 footer" style={{ fontSize: '.8em' }}>
              <FaEnvelope className="" />info.amanimotors@gmail.com
            </p>
          </a>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Information</h2>
          <ul className="space-y-2 font-extralight">
            <li className="footer  md:text-xs ">Custom Requirement</li>
            <li className="footer  md:text-xs ">Get a Loan</li>
            <li className="footer  md:text-xs ">EMI Calculator</li>
            <li className="footer  md:text-xs ">Insurance</li>
            <li className="footer  md:text-xs ">Contact Us</li>
            <li className="footer  md:text-xs ">Privacy Policy</li>
            <li className="footer  md:text-xs ">Terms & Conditions</li>
          </ul>
        </div>

        {/* Brands Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Brands</h2>
          <ul className="space-y-2 columns-2 footer font-extralight">
            <li className=" footer md:text-xs">Audi</li>
            <li className=" footer md:text-xs">Bentley</li>
            <li className=" footer md:text-xs">BMW</li>
            <li className=" footer md:text-xs">Cadillac</li>
            <li className=" footer md:text-xs">Chrysler</li>
            <li className=" footer md:text-xs">DC Design</li>
            <li className=" footer md:text-xs">Fiat</li>
            <li className=" footer md:text-xs">Ford</li>
            <li className=" footer md:text-xs">Hummer</li>
            <li className=" footer md:text-xs">Jaguar</li>
            <li className=" footer md:text-xs">Land Rover</li>
            <li className=" footer md:text-xs">Lexus</li>
            <li className=" footer md:text-xs">Mazda</li>
            <li className=" footer md:text-xs">Mercedes-Benz</li>
            <li className=" footer md:text-xs">Porsche</li>
          </ul>
        </div>

        {/* Search by Category and Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Search by Category</h2>
          <ul className="space-y-2 font-extralight ">
            <li className="md:text-xs footer">Search by Make</li>
            <li className="md:text-xs footer">Search by Vehicle Type</li>
            <li className="md:text-xs footer">Search by Fuel Type</li>
            <li className="md:text-xs footer">Search by Price</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-3 space-x-4 footer">
        <a href="https://wa.me/919037696969" target='blank'>
          <FaWhatsapp className="w-6 h-6 cursor-pointer footer" />
        </a>
        <a href="https://www.facebook.com/people/Amani-Motors/61555223155190/" target='blank'>
          <FaFacebook className="w-6 h-6 cursor-pointer footer" />
        </a>
        {/* <FaTwitter className="w-6 h-6 cursor-pointer footer" /> */}
        <a href="https://www.youtube.com/watch?v=D3kcFp9i_cE" target='blank'>
          <FaYoutube className="w-6 h-6 cursor-pointer footer" />
        </a>
        <a href="https://www.instagram.com/amani_motors/" target='blank'>
          <FaInstagram className="w-6 h-6 cursor-pointer footer" />
        </a>
      </div>

      <div className="container flex flex-col pt-10 items-center ">
        <div className="flex flex-col gap-1 w-full pb-4">
          <div style={{height: '3px'}} className=" w-full bg-gray-600"></div>
          <div style={{height: '3px'}} className=" w-full bg-gray-600"></div>
          <div style={{height: '3px'}} className=" w-full bg-gray-600"></div>
        </div>
        <div className="text-xs md:text-sm w-full flex flex-col  items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="scale-110">&copy; 2024 Amani Motors All Rights Reserved.</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <p className="text-sm scale-90 md:scale-95">
            Designed & Developed by 
            <a href="https://wa.me/919496715606" className="text-blue ml-1" target="_blank" rel="noopener noreferrer">
              Fayas
            </a> & 
            <a href="https://wa.me/919037146943" className="text-blue ml-1" target="_blank" rel="noopener noreferrer">
              Almas
            </a>
          </p>
        </div>
        </div>
      </div>


    </div>
  );
}

export default Footer;
