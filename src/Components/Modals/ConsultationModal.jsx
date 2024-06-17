import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import { toast } from 'react-toastify';

const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    fullName: "",
    vehicle: "",
    budget: "",
    mailId: "",
    mobileNumber: ""
  });

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
    gsap.to('#submit-button-gsap', {
      backgroundPosition: '200% center',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'circ.inOut',
    });
  }, []);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.fullName) newErrors.fullName = 'FullName is required';
    if (!formValues.vehicle) newErrors.vehicle = 'Vehicle is required';
    if (!formValues.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      console.log("FormSubmitted", formValues)
      try {
        await toast.promise(
          axios.post(
            'https://script.google.com/macros/s/AKfycbzEqZZt-ovZ1-9Ri62fWbbl_mEBtZ_qkEbRAhZlV5OIk4cRwinfybnUTL_K8yoh7dWyoA/exec',
            new URLSearchParams(formValues).toString()
          ),
          {
            pending: 'Please Wait...',
            success: {
              render: 'Done :)',
              icon: '👌',
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              style: { fontSize: '0.8em' }
            },
            error: {
              render: 'Server Error! TRY LATER',
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              style: { fontSize: '0.8em' }
            }
          }
        );

        toggleModal();
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
    else {
      toast.error("Error! Check Your Form.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { fontSize: '0.8em' }
      });
    }
  }

  return (
    <>
      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-40 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
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
                        name="fullName"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.fullName}</span>}
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Vehicle <span className=' text-red-600 '>*</span></label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formValues.vehicle}
                        onChange={handleInputChange}
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your vehicle"
                      />
                      {errors.vehicle && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.vehicle}</span>}
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Budget</label>
                      <input
                        type="text"
                        name="budget"
                        value={formValues.budget}
                        onChange={handleInputChange}
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your budget"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Email ID</label>
                      <input
                        type="email"
                        name="mailId"
                        value={formValues.mailId}
                        onChange={handleInputChange}
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-700">Mobile Number <span className=' text-red-600 '>*</span></label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formValues.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full text-slate-950 px-3 py-2 border border-[#f3f0f0e8] rounded-sm focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Enter your mobile number"
                      />
                      {errors.mobileNumber && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.mobileNumber}</span>}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end  pb-7 rounded-b">
                    <button
                      id="submit-button-gsap"
                      type='button'
                      onClick={handleSubmit}
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
