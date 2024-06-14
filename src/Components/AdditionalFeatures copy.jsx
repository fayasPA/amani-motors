import React from "react";
import { FaCar, FaCalculator, FaShieldAlt, FaMoneyBill } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full bg-custom-background1  bg-cover bg-center py-12 mb-9">
      <div className="container mx-auto flex flex-wrap columns-sm">
        <div className="text-center p-4 w-1/4 flex flex-col justify-center items-center">
          <div
            className=" flex justify-center items-center h-24 w-24 mb-4 bg-white 
          rounded-full shadow-lg transition-transform transform hover:scale-110 group hover:bg-slate-700"
          >
            <FaCar className="text-4xl text-gray-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg  text-black font-bold">CUSTOM REQUIREMENT</h3>
          <p className="text-black">
            Prerequisite of car not available currently. Will get back shortly.
          </p>
        </div>
        <div className="text-center p-4 w-1/4 flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 ml-[30px] flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaCalculator className="text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-black">EMI CALCULATOR</h3>
          <p className="text-black">Know your EMI as per your requirement.</p>
        </div>
        <div className="text-center p-4 w-1/4 flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaShieldAlt className="  text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-black">INSURANCE</h3>
          <p className="text-black">
            Safety comes first, get unparalleled automobile insurance quotes.
          </p>
        </div>
        <div className="text-center p-4 w-1/4 flex flex-col justify-center items-center">
          <div className="group hover:bg-slate-700 flex justify-center items-center h-24 w-24 mb-4 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
            <FaMoneyBill className="text-4xl text-gray-700  group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-black">GET AUTO LOAN</h3>
          <p className="text-black">
            Know what documents you need to finance your dream car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
