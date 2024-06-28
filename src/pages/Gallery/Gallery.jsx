import React, { useEffect, useState } from 'react'
import YoutubePlayer from './YoutubePlayer'
import { axiosAPI } from '../../utils/axiosAPI';
import { GET_YOUTUBE_LINKS } from '../../utils/urls';
import { Oval } from 'react-loader-spinner'; // Import the loader component
import { ScrollTrigger } from "gsap/all";
import { gsap } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const axiosInstance = axiosAPI();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    get_youtube_data();
  }, [currentPage])

  async function get_youtube_data() {
    try {
      const response = await axiosInstance.get(`${GET_YOUTUBE_LINKS}?page=${currentPage}`);
      if (response.status === 200 && response.data.links) {
        // setData(response.data);
        setData([...data, ...response.data.links]);
        setTotalDataCount(response.data.totalCount);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
    } finally {
      setLoading(false)
    }
  }

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

  // pagination


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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className=" font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Our Showcase</h2>

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
      </section>
    </div>

  )
}

export default Gallery