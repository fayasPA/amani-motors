import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  const phoneNumber = "+919037696969"
  const email = "info@amanimotors.in"

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
        ease: "none",
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
    <div className="bg-black text-white px-10 py-5 divfooter ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="md:text-base">
          <h2 className="italic text-base md:text-lg font-bold mb-4 footer font-serif">AMANI MOTORS</h2>
          <p className="footer">
            Pipeline Rd, near AKSHAYA CENTER, Karimakkad, Thrikkakara, Edappally, Ernakulam, Kochi, Kerala 682021
          </p>
          <a href={`tel:${phoneNumber}`}>
            <p className="flex items-center mt-4 footer">
              <FaPhone className="mr-2" /> +91 9037696969
            </p>
          </a>
          <a href={`mailto:${email}`}>
            <p className="flex items-center mt-2 footer">
              <FaEnvelope className="mr-2" />info@amanimotors.in
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
            <li className="md:text-xs footer">Search by City</li>
            <li className="md:text-xs footer">Search by Year</li>
            <li className="md:text-xs footer">Search by Color</li>
            <li className="md:text-xs footer">Search by Price</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-3 space-x-4 footer">
        <a href="https://www.facebook.com/people/Amani-Motors/61555223155190/" target='blank'>
          <FaFacebook className="w-6 h-6 cursor-pointer footer" />
        </a>
        {/* <FaTwitter className="w-6 h-6 cursor-pointer footer" /> */}
        <a href="https://www.instagram.com/amani_motors/" target='blank'>
          <FaInstagram className="w-6 h-6 cursor-pointer footer" />
        </a>
        <a href="https://www.youtube.com/watch?v=D3kcFp9i_cE" target='blank'>
          <FaYoutube className="w-6 h-6 cursor-pointer footer" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
