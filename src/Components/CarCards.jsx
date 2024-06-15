import React, { useEffect, useState } from 'react'
import FilterSearch from './FilterSearch';
import { Link, NavLink } from 'react-router-dom';
import { axiosAPI } from '../utils/axiosAPI';
import { BASE_IMAGE_URL, GET_LATEST_VEHICLES } from '../utils/urls';
import { capitalizeFirstLetters, getNumberToCurrencyText } from '../utils/helperFunctions';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";

function CarCards() {

  const [data, setData] = useState([]);
  const axiosInstance = axiosAPI();
  useEffect(() => {
    get_latest_vehicles();
  }, []);

  async function get_latest_vehicles() {
    try {
      const response = await axiosInstance.get(GET_LATEST_VEHICLES);
      if (response.status === 200) {
        setData(response.data.vehicles);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    }
  }

  return (
    <div className="container mx-auto px-4 mt-2 md:mt-4 text-black ">
      <div className='h-52 md:h-44  relative w-[95%] z-30'>
        <div className='absolute top-[-20%] w-full'>
          <FilterSearch />
        </div>
      </div>
      <div className='h-full flex justify-start  font-bold items-center text-xl md:text-2xl pb-10 '>NEW AND PRE OWNED LUXURY PREMIUM CARS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((product, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-lg">
            <NavLink to={`/vehicles/${product.id}`} >
            <img src={`${BASE_IMAGE_URL}${product.image}`} alt={product.image} className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105" />
            </NavLink>
            <div className="text-center font-bold text-lg mb-2">
              {capitalizeFirstLetters(`${product.brand} ${product.model}`)}
            </div>
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
            {/* <div className="text-center font-semibold text-lg text-zinc mb-2">{getNumberToCurrencyText(product.price)}</div>
            <Link to={`/vehicles/${product.id}`} >
              <button className="bg-gradient-to-r from-gray-800  to-gray text-white font-semibold py-2 px-4 rounded w-full">SEE DETAIL</button>
            </Link> */}
            <div className="flex items-center justify-between">
                <span className="text-base md:text-xl font-bold text-gray-900">{getNumberToCurrencyText(product.price)}</span>
                <NavLink to={`/vehicles/${product.id}`} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">See Detail</NavLink>
              </div>
          </div>
        ))}
      </div>
      <Link  to={'/vehicles'} className='w-full flex items-center pt-5 pr-5 font-semibold '>
        <div className='text-gray-500 hover:text-slate-800 flex w-fit h-full justify-center items-center transition-transform transform hover:scale-110 ml-auto gap-1'>
        <p className=' text-xs'>View More Cars</p>
        <FaChevronRight size={10} className=' ' />
        </div>
      </Link>
    </div>
  );
}

export default CarCards;