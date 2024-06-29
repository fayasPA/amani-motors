import React, { useEffect, useState } from 'react'
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

const Showroom = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const images = [
        show0,show1, show2, show3, show4, show5, show6, show7
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo(
            ".showroom-header",
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
                    trigger: ".showroom-header",
                    toggleActions: "play none none none ",
                    once: true
                },
            }
        );
    }, [])

    const showModal = (src) => {
        setModalSrc(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalSrc('');
    };

    return (
        <section className="">
            <header
                className="showroom-header h-36 md:h-64 bg-gray-300 text-2xl font-bold flex flex-col justify-center items-center bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/images/showroom_header.jpg)"
                }}
            >
                <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <span className="text-2xl md:text-3xl text-white">Showroom</span>
                    <p className="text-xs md:text-sm font-light text-white">House of used cars</p>
                </div>
            </header>


            <div className='pt-10 pb-24 bg-white'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope font-bold  text-xl md:text-4xl text-black mb-8 max-xl:text-center">
                        Welcome to Amani Motors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8">
                        {images.map((src, index) => (
                            <div key={index} className="bg-cover group rounded-3xl bg-center overflow-hidden mx-auto  cursor-pointer">
                                <img
                                    src={src}
                                    alt={`showroom_image${index}`}
                                    onClick={() => showModal(src)}
                                    className='max-h-72'
                                />
                            </div>
                        ))}
                    </div>
                </div>

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

        </section>

    )
}

export default Showroom