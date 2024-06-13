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
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white p-10 divfooter ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="italic text-lg font-bold mb-4 footer">AMANI MOTORS</h2>
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
          <ul className="space-y-2 font-thin">
            <li className="footer text-xs ">Custom Requirement</li>
            <li className="footer text-xs ">Get a Loan</li>
            <li className="footer text-xs ">EMI Calculator</li>
            <li className="footer text-xs ">Insurance</li>
            <li className="footer text-xs ">Contact Us</li>
            <li className="footer text-xs ">Privacy Policy</li>
            <li className="footer text-xs ">Terms & Conditions</li>
          </ul>
        </div>

        {/* Brands Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer ml-14">Brands</h2>
          <ul className="space-y-2 columns-2 footer font-thin">
            <li className=" footer text-xs">Audi</li>
            <li className=" footer text-xs">Bentley</li>
            <li className=" footer text-xs">BMW</li>
            <li className=" footer text-xs">Cadillac</li>
            <li className=" footer text-xs">Chrysler</li>
            <li className=" footer text-xs">DC Design</li>
            <li className=" footer text-xs">Fiat</li>
            <li className=" footer text-xs">Ford</li>
            <li className=" footer text-xs">Hummer</li>
            <li className=" footer text-xs">Jaguar</li>
            <li className=" footer text-xs">Land Rover</li>
            <li className=" footer text-xs">Lexus</li>
            <li className=" footer text-xs">Mazda</li>
            <li className=" footer text-xs">Mercedes-Benz</li>
            <li className=" footer text-xs">Porsche</li>
          </ul>
        </div>

        {/* Search by Category and Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Search by Category</h2>
          <ul className="space-y-2 font-thin ">
            <li className="text-xs footer">Search by City</li>
            <li className="text-xs footer">Search by Year</li>
            <li className="text-xs footer">Search by Color</li>
            <li className="text-xs footer">Search by Price</li>
          </ul>

          {/*  <h2 className="text-lg font-bold mb-4 mt-6">Newsletter</h2>
          <p className="mb-4">Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p> */}

          {/* Screen width issue */}
          {/* <div className="flex items-center bg-gray-800 rounded-md p-2">
            <input type="email" placeholder="Enter Email Address" className="bg-transparent border-none focus:outline-none text-white flex-grow" />
            <button className="text-white p-2">
              <FaEnvelope />
            </button>
          </div> */}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8 space-x-4 footer">
        <FaFacebook className="w-6 h-6 cursor-pointer footer" />
        <FaTwitter className="w-6 h-6 cursor-pointer footer" />
        <FaInstagram className="w-6 h-6 cursor-pointer footer" />
        <FaYoutube className="w-6 h-6 cursor-pointer footer" />
      </div>
    </div>
  );
}

export default Footer;
