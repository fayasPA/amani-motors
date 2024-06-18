import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { axiosAPI } from "../../utils/axiosAPI";
import { BASE_IMAGE_URL, GET_ALL_VEHICLES } from "../../utils/urls";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { getNumberToCurrencyText } from "../../utils/helperFunctions";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import FilterSearch from "../../Components/FilterSearch";
gsap.registerPlugin(ScrollTrigger);



const Cars = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filters = {
    brand: params.get('brand'),
    car_type: params.get('car_type'),
    fuel_type: params.get('fuel_type'),
    min_price: params.get('min_price') && parseInt(params.get('min_price')),
    max_price: params.get('max_price') && parseInt(params.get('max_price'))
  };

  const hasFilters = Object.values(filters).some(filter => filter !== null && filter !== '');
  const filterProps = {
    ...(filters.brand && { brandSel: filters.brand }),
    ...(filters.fuel_type && { fuelTypeSel: filters.fuel_type }),
    ...(filters.car_type && { carTypeSel: filters.car_type }),
    ...(filters.min_price && { minPriceSel: filters.min_price }),
    ...(filters.max_price && { maxPriceSel: filters.max_price }),
  };

  const axiosInstance = axiosAPI();
  const [data, setData] = useState([]);
  const [totalVehicleCount, setTotalVehicleCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      ".headerImg",
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
          trigger: ".headerImg",
          toggleActions: "play none none none ",
          once: true
        },
      }
    );
  }, [])

  useEffect(() => {
    get_all_vehicles();
    window.scrollTo(0, 0);
  }, [location.search]);
  async function get_all_vehicles() {
    try {
      const params = new URLSearchParams(location.search);
      const response = await axiosInstance.get(GET_ALL_VEHICLES, { params });
      if (response.status === 200) {
        setData(response.data.vehicles);
        setTotalVehicleCount(response.data.total_count)
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    }
  }

  return (
    <div className="flex-1 ">
      <header
        className="headerImg h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center opacity-80"
        style={{
          backgroundImage: "url(/assets/images/gallery_header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="text-sm md:text-xl">{totalVehicleCount} PRE OWNED LUXURY CARS AVAILABLE</span>
        <p className="text-sm md:text-base font-light md:font-extralight">House of used cars</p>
      </header>

      <div className="container mx-auto p-4 text-black bg-white ">


        <div className='h-52 md:h-44  relative w-[95%] z-30 '>
          <div className='absolute top-[-20%] w-full'>
            <FilterSearch {...filterProps} />
          </div>
        </div>


        <div className="flex justify-between text-gray font-bold items-center px-5 ">
          <span className="text-base md:text-2xl ">Find Your Dream Car</span>
          {hasFilters && (
            <Link to={'/vehicles'} className='w-fit flex items-center font-semibold '>
              <div className='flex bg-gradient-to-r from-gray-800 to-gray text-white font-semibold p-1 md:p-3 rounded-sm gap-1'>
                <p className=' text-xs'>View All Cars</p>
                <FaChevronRight size={10} className=' ' />
              </div>
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {(data && data.length) > 0 ? (data.map((product, index) => (
            <div key={index} className=" p-4 rounded-lg shadow-lg">
              <NavLink to={`/vehicles/${product.id}`} >
                <img src={`${BASE_IMAGE_URL}${product.image}`} alt={product.image} className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105" />
              </NavLink>
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
              {/* <div className="text-center font-semibold text-lg text-zinc mb-2">{getNumberToCurrencyText(product.price)}</div>
            <Link to={`/vehicles/${product.id}`} >
              <button className="bg-gradient-to-r from-gray-800  to-gray text-white font-semibold py-2 px-4 rounded w-full">SEE DETAIL</button>
            </Link> */}
              <div className="flex items-center justify-between">
                <span className="text-base md:text-xl font-bold text-gray-900">{getNumberToCurrencyText(product.price)}</span>
                <Link to={`/vehicles/${product.id}`} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">See Detail</Link>
              </div>
            </div>
          ))) : (
            <div className="p-5 flex text-zinc self-center">
              <p className="text-base md:text-lg font-semibold">No Result Found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cars;
