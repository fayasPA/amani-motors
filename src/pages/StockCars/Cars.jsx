import React, { useEffect, useState } from "react";
import CarCards from "../../Components/CarCards";
import { Latest_Products } from "../../Components/Data";
import { Link } from "react-router-dom";
import { axiosAPI } from "../../utils/axiosAPI";
import { BASE_IMAGE_URL, GET_ALL_VEHICLES } from "../../utils/urls";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { getNumberToCurrencyText } from "../../utils/helperFunctions";

const Cars = () => {
  const axiosInstance = axiosAPI();
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    get_all_vehicles();
  }, []);
  async function get_all_vehicles() {
    try {
      const response = await axiosInstance.get(GET_ALL_VEHICLES);
      if (response.status === 200) {
        setData(response.data.vehicles);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    }
  }

  return (
    <div className="flex-1 ">
      <div className="relative h-80">
        <img
          src="https://images.hdqwalls.com/wallpapers/dodge-challenger-angel-headlights-4k-n9.jpg"
          alt=""
          className=" h-full w-full opacity-40"
        />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-lg md:text-2xl font-pacifico text-slate-200">
          <h1>39 PRE OWNED LUXURY CARS AVAILABLE</h1>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-4 text-black bg-white ">
        <div className="flex justify-start text-gray font-bold items-center text-2xl pb-10 ">
          Find Your Dream Car
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((product, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-lg">
            <img src={`${BASE_IMAGE_URL}${product.image}`} alt={product.image} className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105" />
            <div className="text-center font-bold text-lg mb-2">{product.brand} {product.model}</div>
            <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
              <div className="flex items-center gap-2 justify-center">
                {/* <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/></svg> */}
                <FaRegCalendarAlt size={15} className='text-gray' />
                <span className='text-gray font-medium'>{product.year}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <LuFuel size={15} className='text-gray' />
                <span className='text-gray font-medium'>petrol</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <IoSpeedometerOutline size={15} className='text-gray' />
                <span className='text-gray font-medium'>{product.kms} KMS</span>
              </div>
            </div>
            <div className="text-center font-semibold text-lg text-zinc mb-2">{getNumberToCurrencyText(product.price)}</div>
            <Link to={`/vehicles/${product.id}`} >
              <button className="bg-gradient-to-r from-gray-800  to-gray text-white font-semibold py-2 px-4 rounded w-full">SEE DETAIL</button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Cars;
