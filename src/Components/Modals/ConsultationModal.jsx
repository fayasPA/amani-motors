// Modal.js
import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
const ConsultationModal = () => {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    gsap.to('#animated-button', {
      backgroundPosition: '200% center',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'circ.inOut',
    });
  }, []);

  useEffect(() => {
    // Prevent body from scrolling when the modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component is unmounted or showModal changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);
  return (
    <>
      {showModal ? (
        <>
          <div
            className="consultation-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="max-h-screen relative w-full my-6 mx-auto max-w-sm md:max-w-lg text-black">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center text-center justify-end rounded-t">
                  <button className="m-1 px-1 ml-auto bg-transparent border-2 border-[#c0bbbb6c] rounded-sm text-black  float-right  text-sm md:text-xl leading-none font-light outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="flex items-center text-center justify-between px-5 border-b border-solid border-x-gray-200 rounded-t">
                  <h3 className="text-3xl font-semibold w-full">
                    Get Free Consultation
                  </h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button> */}
                </div>
                {/*body*/}
                  <form>
                <div className="px-6 pt-2 flex-auto">
                    <div className="mb-4">
                      <label className="block text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border rounded-lg"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Vehicle *</label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border rounded-lg"
                        placeholder="Enter your vehicle"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Budget</label>
                      <input
                        type="text"
                        className="w-full text-slate-950 px-3 py-2 border rounded-lg"
                        placeholder="Enter your budget"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Email ID</label>
                      <input
                        type="email"
                        className="w-full text-slate-950 px-3 py-2 border rounded-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Mobile Number *</label>
                      <input
                        type="tel"
                        className="w-full px-3 text-slate-950 py-2 border rounded-lg"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                  <button
                    id="animated-button"
                    type="submit"
                    className="w-full px-3 py-2 text-white rounded-lg"
                    style={{
                      background: 'linear-gradient(to right, #b49f8c, #F7EF8A, #D2AC47, #EDC967)',
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ConsultationModal;
