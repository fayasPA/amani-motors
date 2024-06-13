import React, { useEffect, useState } from 'react'
import { GET_VEHICLE_DETAILS } from '../../utils/urls';
import { useParams } from 'react-router-dom';
import { axiosAPI } from '../../utils/axiosAPI';

const CarDetails = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const axiosInstance = axiosAPI();
  let { carId } = useParams();

  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        get_banner_data();
      }, []);
      async function get_banner_data() {
        try {
          const response = await axiosInstance.get(`${GET_VEHICLE_DETAILS}/${carId}`);
          console.log("*******WORKED", response.data.vehicle.images);
          if (response.status === 200) {
            setData(response.data.carDetails);
          }
        } catch (error) {
          console.log("---------BANNER_ERROR", error);
        }
      }
    return (
        <div className='bg-white'>
            <header
                className="aboutus h-40 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center "
                style={{
                    backgroundImage: "url(/src/assets/images/about_us/aboutUsBg2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <span>CAR DETAIL</span>
            </header>
            <section className="py-2">
                <div className="container mx-auto px-4">

                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img className="h-full w-full max-w-full object-cover" src="/src/assets/images/car_images/benzf.jpeg" alt="" />
                                    </div>
                                </div>

                                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="flex flex-row items-start lg:flex-col">
                                        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                            <img className="h-full w-full object-cover" src="/src/assets/images/car_images/benzf.jpeg" alt="" />
                                        </button>
                                        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                            <img className="h-full w-full object-cover" src="/src/assets/images/car_images/benzf.jpeg" alt="" />
                                        </button>
                                        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                            <img className="h-full w-full object-cover" src="/src/assets/images/car_images/benzf.jpeg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Mercedes-Benz S-560 MAYBACH</h1>


                            <div className="mt-3 flex select-none flex-wrap items-center gap-10">

                                <label className="flex">
                                    <svg
                                        className="w-5 h-5 mr-1 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
                                    </svg>
                                    {/* <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">FAYAS</p> */}
                                    <span className='text-black'>1997</span>
                                </label>
                                <label className="flex">
                                    <svg
                                        className="w-5 h-5 mr-1 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.34 15.48l-.11-.09-5.72-4.5c-.05-.04-.1-.07-.16-.1a4.74 4.74 0 0 0-5.49 0c-.06.03-.11.06-.16.1l-5.72 4.5c-.08.06-.15.14-.21.22-.01.02-.02.03-.03.05-.1.17-.15.37-.13.57.01.04.01.07.02.1.06.33.26.62.53.8.01.01.03.01.04.02.1.06.2.1.31.12.04.01.07.01.11.02h16c.03 0 .07-.01.11-.02.11-.02.21-.06.31-.12.01-.01.03-.01.04-.02.27-.18.47-.47.53-.8.01-.04.01-.07.02-.1.02-.2-.03-.4-.13-.57 0-.02-.01-.03-.03-.05a1.15 1.15 0 0 0-.21-.22zM12 3.5c1.38 0 2.5 1.12 2.5 2.5S13.38 8.5 12 8.5 9.5 7.38 9.5 6 10.62 3.5 12 3.5z" />
                                    </svg>
                                    {/* <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">FAYAS</p> */}
                                    <span className='text-black'>1997</span>
                                </label>

                            </div>


                            <div className="text-black mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                <div className="flex items-end">
                                    <h1 className="text-3xl font-bold">₹6000000</h1>
                                    <span className="text-3xl font-bold">/-</span>
                                </div>
                            </div>

                            <ul className="mt-8 space-y-2">
                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                    </svg>
                                    Dealership in All India
                                </li>

                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                    </svg>
                                    Callback Anytime
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-3 text-black">
                            <div className="border-b border-gray-300">
                                <nav className="flex gap-4">
                                    <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                                    <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                                    </a>
                                </nav>
                            </div>

                            <div className="mt-8 flow-root sm:mt-12">
                                <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                                <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                                <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CarDetails