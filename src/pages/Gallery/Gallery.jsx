import React, { useEffect, useState } from 'react'
import YoutubePlayer from './YoutubePlayer'
import { ScrollTrigger } from "gsap/all";
import { gsap } from 'gsap/gsap-core';
import { axiosAPI } from '../../utils/axiosAPI';
import { GET_YOUTUBE_LINKS } from '../../utils/urls';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const axiosInstance = axiosAPI();
const [data, setData] = useState([]);
  useEffect(() => {
    get_youtube_data();
  }, []);
  async function get_youtube_data() {
    try {
      const response = await axiosInstance.get(GET_YOUTUBE_LINKS);
      if (response.status === 200) {
        console.log('YOUTUBE', response.data)
        setData(response.data);
      }
    } catch (error) {
      console.log("---------BANNER_ERROR", error);
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
      
    // console.log("*******WORKING", response.data.vehicle);
    return (
        <div className='h-auto'>
            <header
                className="gallery-header h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center opacity-80"
                style={{
                    backgroundImage: "url(/assets/images/stock_cars_header.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <span className='text-2xl md:text-3xl'>Videos & Gallery</span>
                <p className="text-xs md:text-sm font-light">House of used cars</p>
            </header>
            <section className="py-10 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className=" font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Our Showcase</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                        {data.map((youtube, index) => (
                            <div key={index} className="h-64 md:h-80 bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer">
                                <YoutubePlayer url={youtube.video_link} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Gallery