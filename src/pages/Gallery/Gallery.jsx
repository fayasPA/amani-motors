import React, { useEffect, useState } from 'react'
import YoutubePlayer from './YoutubePlayer'
import { axiosAPI } from '../../utils/axiosAPI';
import { BASE_IMAGE_URL, GET_STAR_DELIVERIES, GET_YOUTUBE_LINKS } from '../../utils/urls';
import { Oval } from 'react-loader-spinner'; // Import the loader component
import { ScrollTrigger } from "gsap/all";
import { gsap } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);
import show0 from "/assets/images/showroom/show0.jpeg";
import show1 from "/assets/images/showroom/show1.jpeg";
import show2 from "/assets/images/showroom/show2.jpeg";
import show3 from "/assets/images/showroom/show3.jpeg";
import show4 from "/assets/images/showroom/show4.jpeg";
import show5 from "/assets/images/showroom/show5.jpeg";
import show6 from "/assets/images/showroom/show6.jpeg";
import show7 from "/assets/images/showroom/show7.jpeg";
import show8 from "/assets/images/showroom/loginBg.jpg";

const Gallery = () => {
  const axiosInstance = axiosAPI();
  const [activeTab, setActiveTab] = useState('customer_images');
  const [data, setData] = useState();
  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [totalImgDataCount, setTotalImgDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgCurrentPage, setImgCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const images = [
    show0, show1, show2, show3, show4, show5, show6, show7, show8
  ];


  useEffect(() => {
    get_youtube_data();
    get_star_deliveries();
  }, [])

  async function get_star_deliveries() {
    try {
      const response = await axiosInstance.get(`${GET_STAR_DELIVERIES}`);
      if (response.status === 200 && response.data.images) {
        setImgData(response.data.images);
        setTotalImgDataCount(response.data.totalCount);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    } finally {
      setImgLoading(false)
    }
  }

  useEffect(() => {
    if (imgCurrentPage > 1) {
      load_more_star_deliveries();
    }
  }, [imgCurrentPage])
  async function load_more_star_deliveries() {
      try {
        const response = await axiosInstance.get(`${GET_STAR_DELIVERIES}?page=${imgCurrentPage}`);
        if (response.status === 200 && response.data.images) {
          setImgData([...imgData, ...response.data.images]);
        }
      } catch (error) {
        console.log("---------BANNER_ERROR", error);
      } finally {
        setImgLoading(false)
      }
  }


  async function get_youtube_data() {
    try {
      const response = await axiosInstance.get(`${GET_YOUTUBE_LINKS}`);
      if (response.status === 200 && response.data.links) {
        setData(response.data.links);
        setTotalDataCount(response.data.totalCount);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (currentPage > 1) {
      load_more_youtube_data();
    }
  }, [currentPage])
  async function load_more_youtube_data() {
    try {
      const response = await axiosInstance.get(`${GET_YOUTUBE_LINKS}?page=${currentPage}`);
      if (response.status === 200 && response.data.links) {
        setData([...data, ...response.data.links]);
        setTotalDataCount(response.data.totalCount);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    } finally {
      setLoading(false)
    }
  }

  const showModal = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(
      ".gallery-header",
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
          trigger: ".gallery-header",
          toggleActions: "play none none none ",
          once: true
        },
      }
    );
  }, [])


  return (
    <div className='h-auto'>

      <header
        className="gallery-header h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/stock_cars_header.jpg)"
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <span className="text-2xl md:text-3xl text-white">Videos & Gallery</span>
          <p className="text-xs md:text-sm font-light text-white">House of used cars</p>
        </div>
      </header>
      <section className="py-10 bg-white">
        <div className='w-full text-center'>
          <h2 className=" font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Our Showcase</h2>
        </div>


        <div className='px-10 md:px-28'>
          <div className="flex w-full rounded-full overflow-hidden shadow-md">
            <button
              onClick={() => setActiveTab('customer_images')}
              className={`text-sm md:text-lg flex-1 py-3 text-center transition-colors duration-300 ${activeTab === 'customer_images' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
                }`}
            >
              Star Deliveries
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`text-sm md:text-lg flex-1 py-3 text-center transition-colors duration-300 ${activeTab === 'video' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
                }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="w-full p-4">
          {activeTab === 'customer_images' && (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {imgLoading ? ( 
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
                  (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {imgData.map((img, index) => (
                      <div key={index} className="w-full h-64 md:h-80 bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer flex justify-center items-center">
                        <img
                          src={`${BASE_IMAGE_URL}/${img.path}`}
                          alt={`customer_image${index}`}
                          onClick={() => showModal(`${BASE_IMAGE_URL}/${img.path}`)}
                          className='h-full w-full object-cover'
                        />
                      </div>
                    ))}
                    {modalOpen && (
                      <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">
                        <button
                          className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
                          onClick={closeModal}
                        >
                          ×
                        </button>
                        <img
                          id="modal-img"
                          className="max-w-[80%] max-h-[80%] object-cover rounded-3xl"
                          src={modalSrc}
                          alt="Modal Content"
                        />
                      </div>
                    )}
                  </div>
                  )}

              </div>
              {imgData.length < totalImgDataCount && (
                <div className="flex flex-row w-full py-5 px-10">
                  <button onClick={() => setImgCurrentPage(imgCurrentPage + 1)} className="w-full bg-white hover:bg-gray-700 text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    View More
                  </button>
                </div>
              )
              }
            </>
          )}


          {activeTab === 'video' && (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
                  (<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {data.map((youtube, index) => (
                      <div key={index} className="h-64 md:h-80 bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer flex justify-center items-center">
                        <YoutubePlayer url={youtube.video_link} />
                      </div>
                    ))}
                  </div>)}

              </div>
              {data.length < totalDataCount && (
                <div className="flex flex-row w-full py-5 px-10">
                  <button onClick={() => setCurrentPage(currentPage + 1)} className="w-full bg-white hover:bg-gray-700 text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    View More
                  </button>
                </div>
              )
              }
            </>
          )}
        </div>


      </section>
    </div>

  )
}

export default Gallery