import React, { useEffect, useState } from 'react'
import { BASE_IMAGE_URL, GET_VEHICLE_DETAILS } from '../../utils/urls';
import { useParams } from 'react-router-dom';
import { axiosAPI } from '../../utils/axiosAPI';
import { capitalizeFirstLetters, getNumberToCurrencyText } from '../../utils/helperFunctions';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";

const CarDetails = () => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const axiosInstance = axiosAPI();
    const { carId } = useParams();
    const phoneNumber = "+919037696969"

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        get_banner_data();
    }, []);

    async function get_banner_data() {
        try {
            const response = await axiosInstance.get(`${GET_VEHICLE_DETAILS}/${carId}`);
            if (response.status === 200) {
                setData(response.data.vehicle);
                if (response.data.vehicle.images.length > 0) {
                    setImages(response.data.vehicle.images);
                    setSelectedImage(`${BASE_IMAGE_URL}${response.data.vehicle.images[0].path}`)
                }
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

                        {/* Images */}
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img className="h-full w-full max-w-full object-cover" src={selectedImage} alt="Selected" />
                                    </div>
                                </div>

                                <div className="single-prod-scroll max-h-60 lg:overflow-y-scroll mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="single-prod-scroll flex flex-row lg:flex-col items-start overflow-x-scroll lg:overflow-hidden" style={{ maxWidth: '100%' }}>
                                        {images.map((image, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`border-2 ${currentImgIndex === index ? "border-gray-900" : "border-transparent"} flex-shrink-0 aspect-square mb-3 h-20 w-20 overflow-hidden rounded-lg text-center`}
                                                onClick={() => {
                                                    setSelectedImage(`${BASE_IMAGE_URL}${image.path}`)
                                                    setCurrentImgIndex(index)
                                                }}
                                            >
                                                <img className="h-full w-full object-cover" src={`${BASE_IMAGE_URL}${image.path}`} alt="vehicle_image" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Images */}


                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{capitalizeFirstLetters(data.brand)} {capitalizeFirstLetters(data.model)}</h1>
                            <div className="mt-3 flex select-none flex-wrap items-center gap-10">

                                <div className="flex items-center gap-2 justify-center">
                                    {/* <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/></svg> */}
                                    <FaRegCalendarAlt size={15} className='text-gray' />
                                    <span className='text-gray font-medium'>{data.year}</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <LuFuel size={15} className='text-gray' />
                                    <span className='text-gray font-medium'>data.petrol</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <IoSpeedometerOutline size={15} className='text-gray' />
                                    <span className='text-gray font-medium'>{data.kms} KMS</span>
                                </div>

                            </div>

                            <div className="text-black mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                <div className="flex items-end">
                                    <h1 className="text-3xl font-bold">{getNumberToCurrencyText(data.price)}</h1>
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
                                    <span className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> DESCRIPTION </span>

                                    {/* <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                                    </a> */}
                                </nav>
                            </div>

                            <div className="mt-8 flow-root sm:mt-12">
                                <ul className="space-y-2 columns-3 footer font-thin">
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Condition:</span> Used</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Year:</span> {data.year}</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Color:</span> {data.color}</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Engine Type:</span> data.fuel_type</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Ownership:</span> {data.ownership}</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Transmission:</span> {data.transmission}</li>
                                    <li className="text-xs md:text-base"><span className='font-semibold'>Status:</span> {data.status}</li>
                                </ul>
                                <a href={`tel:${phoneNumber}`} id="call-button">
                                    <button className=" my-5 text-[#ffff] font-semibold py-2 px-4 rounded w-full flex gap-5 justify-center items-center"
                                        style={{ background: 'linear-gradient(to right, #AEB625, #F7EF8A, #D2AC47, #EDC967)', backgroundSize: '200% 200%' }}
                                    >
                                        <TbPhoneCall size={25} className='text-gray-100' />
                                        <h1 className="text-xl md:text-3xl font-bold ">Book an Appointment</h1>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default CarDetails