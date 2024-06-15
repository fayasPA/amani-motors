import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Prevent body from scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component is unmounted or isOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    gsap.to('#animated-button', {
      backgroundPosition: '200% center',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'circ.inOut',
    });
  }, []);

  return (
    <>
      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="consultation-modal relative bg-white rounded-sm shadow md:overflow-y-auto max-h-[90vh]">
              <div className=" flex items-center justify-between p-1 rounded-t ">
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center "
                  onClick={toggleModal}
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex items-center text-center justify-center rounded-t">
                  <h3 className="font-roboto text-xl font-semibold text-gray-900 ">
                    Get a Free Consultation
                  </h3>
                </div>
              <div className="px-8">
                <form>
                  <div className="pt-2 flex-auto text-xs md:text-sm font-normal">
                    <div className="mb-2">
                      <label className="block text-gray-700 ">Full Name <span className=' text-red-600 '>*</span></label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Vehicle <span className=' text-red-600 '>*</span></label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your vehicle"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Budget</label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your budget"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Email ID</label>
                      <input
                        type="email"
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Mobile Number *</label>
                      <input
                        type="tel"
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end  pb-7 rounded-b">
                    <button
                      id="animated-button"
                      type="submit"
                      className="w-full px-3 py-2 font-semibold text-white rounded-sm"
                      style={{
                        background:
                          'linear-gradient(to right, #b49f8c, #F7EF8A, #D2AC47, #EDC967)',
                        backgroundSize: '200% 200%',
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationModal;
