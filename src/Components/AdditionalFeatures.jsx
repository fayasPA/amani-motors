import React from "react";
import { FaCar, FaCalculator, FaShieldAlt, FaMoneyBill } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full bg-custom-background1  bg-cover bg-center mt-5 py-12 pb-5">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 items-start gap-8">
        <div className="text-center p-4 mx-auto flex flex-col justify-center items-center">
          <div
            className=" flex justify-center items-center h-24 w-24 mb-4 bg-white 
          rounded-full shadow-lg transition-transform transform hover:scale-110 group hover:bg-slate-700"
          >
            <FaCar className="text-4xl text-gray-700 group-hover:text-white" />
          </div>
          <h3 className="text-base md:text-lg  text-black font-bold">CUSTOM REQUIREMENT</h3>
          <p className="text-black">
            Prerequisite of car not available currently. Will get back shortly.
          </p>
        </div>
        <div className="text-center p-4 mx-auto flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaCalculator className="text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-black">EMI CALCULATOR</h3>
          <p className="text-black">Know your EMI as per your requirement.</p>
        </div>
        <div className="text-center p-4 mx-auto flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaShieldAlt className="  text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-black">INSURANCE</h3>
          <p className="text-black">
            Safety comes first, get unparalleled automobile insurance quotes.
          </p>
        </div>
        <div className="text-center p-4 mx-auto flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaMoneyBill className="text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold text-black">GET AUTO LOAN</h3>
          <p className="text-black">
            Know what documents you need to finance your dream car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
