import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { POST_SELL_VEHICLE_FORM } from '../utils/urls';

const ThreeStepForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    make: '',
    model: '',
    year: '',
    kms: '',
    regNo: '',
    name: '',
    email: '',
    mobile: '',
    location: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

  const renderCarDetailsForm = () => (
    <div>
      <h2 className="text-lg md:text-xl text-white font-semibold mb-4">Fill Your Car Details</h2>
      <div className="space-y-4">
        <input className="input" type="text" name="make" placeholder="Car Make" value={formValues.make} onChange={handleInputChange} />
        {errors.make && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.make}</span>}
        <input className="input" type="text" name="model" placeholder="Car Model" value={formValues.model} onChange={handleInputChange} />
        {errors.model && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.model}</span>}
        <input className="input" type="text" name="year" placeholder="Manufacturing Year" value={formValues.year} onChange={handleInputChange} />
        {errors.year && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.year}</span>}
        <input className="input" type="text" name="kms" placeholder="KMs Driven" value={formValues.kms} onChange={handleInputChange} />
        {errors.kms && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.kms}</span>}
        <input className="input" type="text" name="regNo" placeholder="Registration No." value={formValues.regNo} onChange={handleInputChange} />
      </div>
    </div>
  );

  const renderPersonalDetailsForm = () => (
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-4">Fill Your Personal Details</h2>
      <div className="space-y-4">
        <input className="input" type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleInputChange} />
        {errors.name && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.name}</span>}
        <input className="input" type="email" name="email" placeholder="Email ID" value={formValues.email} onChange={handleInputChange} />
        <input className="input" type="text" name="mobile" placeholder="Mobile No." value={formValues.mobile} onChange={handleInputChange} />
        {errors.mobile && <span style={{ fontSize: '1em' }} className="error text-red-700">{errors.mobile}</span>}
        <input className="input" type="text" name="location" placeholder="Location" value={formValues.location} onChange={handleInputChange} />
      </div>
    </div>
  );

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.make) newErrors.make = 'Vehicle Make is required';
    if (!formValues.model) newErrors.model = 'Vehicle Model is required';
    if (!formValues.year) newErrors.year = 'Year of Manufacture is required';
    if (!formValues.kms) newErrors.kms = 'km is required';
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.mobile) newErrors.mobile = 'Mobile No is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const transformedValues = {
          Make: formValues.make,
          Model: formValues.model,
          Year: formValues.year,
          Kms: formValues.kms,
          Name: formValues.name,
          Mobile: formValues.mobile,
        };
        await toast.promise(
          axios.post(POST_SELL_VEHICLE_FORM,
            new URLSearchParams(transformedValues).toString()
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
        
        setStep(1)
        setFormValues({
          make: '',
          model: '',
          year: '',
          kms: '',
          regNo: '',
          name: '',
          email: '',
          mobile: '',
          city: '',
          code: ''
        });
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
    else {
      setStep(1)
      toast.error("Error! Check Your Form.", {
        position: "top-right",
        autoClose: 2000,
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
    <div className="flex justify-center items-center  w-full pb-8 md:pb-10">
      <div className="w-4/5 md:w-3/5 bg-black border-[1px] p-4 md:p-8 shadow-md rounded ">
        <div className="flex justify-between mb-6">
          <div className={`step ${step === 1 ? 'active' : 'inactive'}`}>1 Car Details</div>
          <div className={`step ${step === 2 ? 'active' : 'inactive'}`}>2 Personal Details</div>
        </div>
        {step === 1 && renderCarDetailsForm()}
        {step === 2 && renderPersonalDetailsForm()}
        <div className="flex justify-between mt-6">
          {step > 1 && <button onClick={prevStep} className="bg-gray-900 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded ">Previous</button>}
          {step < 2 && <button onClick={nextStep} className="bg-gray-900 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Next</button>}
          {step === 2 && <button onClick={handleSubmit} className="bg-gradient-to-r from-gray-800 to-gray text-white font-semibold p-1 md:p-2 px-7 md:px-10 rounded-md">Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default ThreeStepForm;
