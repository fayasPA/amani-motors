import React, { useState } from 'react'
import YoutubePlayer from './YoutubePlayer'

const Gallery = () => {
    const [data, setData] = useState([
        { id: 1, url: "https://www.youtube.com/watch?v=TmUYSgiyKnc&list=PLTLfwkMSvQT7rhamz_4IcolVKAFsvVF9j" },
        { id: 2, url: "https://www.youtube.com/watch?v=r1xs8hBOAc4&list=PLTLfwkMSvQT7rhamz_4IcolVKAFsvVF9j&index=2" },
        { id: 3, url: "https://www.youtube.com/watch?v=UDubsWD0LRE&list=PLTLfwkMSvQT7rhamz_4IcolVKAFsvVF9j&index=3" }
    ]);
    // console.log("*******WORKING", response.data.vehicle);
    return (
        <>
            <header
                className="aboutus h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center opacity-80"
                style={{
                    backgroundImage: "url(/src/assets/images/about_us/aboutUsBg2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <span>Videos & Gallery</span>
                <p className="text-sm font-light">House of used cars</p>
            </header>
            <section className="py-10 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className=" font-bold text-xl md:text-4xl text-black mb-8 max-xl:text-center">Our Showcase</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                        {data.map((youtube, index) => (
                            <div key={index} className="h-64 md:h-80 bg-cover group rounded-3xl bg-center overflow-hidden mx-auto cursor-pointer">
                                <YoutubePlayer url={youtube.url} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>

    )
}

export default Gallery