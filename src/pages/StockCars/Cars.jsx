import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { axiosAPI } from "../../utils/axiosAPI";
import { BASE_IMAGE_URL, GET_ALL_VEHICLES } from "../../utils/urls";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { capitalizeFirstLetters, getNumberToCurrencyText } from "../../utils/helperFunctions";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import FilterSearch from "../../Components/FilterSearch";
import { Oval } from 'react-loader-spinner'; // Import the loader component
gsap.registerPlugin(ScrollTrigger);

const Cars = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);
  const filters = {
    brand_id: params.get('brand_id'),
    car_type: params.get('car_type'),
    fuel_type: params.get('fuel_type'),
    min_price: params.get('min_price') && parseInt(params.get('min_price')),
    max_price: params.get('max_price') && parseInt(params.get('max_price'))
  };

  const hasFilters = Object.values(filters).some(filter => filter !== null && filter !== '');
  const filterProps = {
    ...(filters.brand_id && { brandSel: filters.brand_id }),
    ...(filters.fuel_type && { fuelTypeSel: filters.fuel_type }),
    ...(filters.car_type && { carTypeSel: filters.car_type }),
    ...(filters.min_price && { minPriceSel: filters.min_price }),
    ...(filters.max_price && { maxPriceSel: filters.max_price }),
  };

  const axiosInstance = axiosAPI();
  const [data, setData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
    setData([])
    setCurrentPage(1)
    setTotalDataCount(0);
    window.scrollTo(0, 0);
  }, [location.search]);


  useEffect(()=>{
    if (currentPage === 1 && location.search && data.length === 0){
      get_all_vehicles();
    }
  },[currentPage, location.search, data])

  useEffect(() => {
    get_all_vehicles();
  }, [currentPage])

  async function get_all_vehicles() {
    try {
      const params = new URLSearchParams(location.search);
      const response = await axiosInstance.get(`${GET_ALL_VEHICLES}?page=${currentPage}`, { params });
      if (response.status === 200) {
        // setData(response.data.vehicles);
        if(response.data.vehicles){
          setData([...data, ...response.data.vehicles]);
          setTotalDataCount(response.data.total_count);
        }
      }
    } catch (error) {
        console.log("---------BANNER_ERROR", error);
    } finally {
      setLoading(false)
    }
  }

  

  // pagination


  return (
    <div className="flex-1 ">

      <header
        className="headerImg h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/gallery_header.jpg)"
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <span className="text-sm md:text-xl text-white">{totalDataCount} PRE OWNED LUXURY CARS AVAILABLE</span>
          <p className="text-xs md:text-sm font-light text-white">House of used cars</p>
        </div>
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
        {loading ? ( // Show loader while loading is true
          <div className='flex flex-row  justify-center items-center h-32 md:h-60'>
            <Oval
              height={50}
              width={50}
              color="gray"
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#ccc"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) :
          (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-5">
            {(data && data.length > 0) ? (data.map((product, index) => (
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
                    <span className='text-gray font-medium'>{capitalizeFirstLetters(product.fuel_type)}</span>
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

          </div>)}

        {/* load more btn */}
        {data.length < totalDataCount && (
          <div className="flex flex-row w-full">
            <button onClick={() => setCurrentPage(currentPage + 1)} className="w-full bg-white hover:bg-gray-700 text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              View More
            </button>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Cars;