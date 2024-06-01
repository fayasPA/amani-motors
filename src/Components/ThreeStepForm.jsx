import React, { useState } from 'react';

const ThreeStepForm = () => {
  const [step, setStep] = useState(1);
  const [carDetails, setCarDetails] = useState({ make: '', model: '', year: '', kms: '', regNo: '' });
  const [personalDetails, setPersonalDetails] = useState({ name: '', email: '', mobile: '', city: '', code: '' });
  const [carImages, setCarImages] = useState([null, null, null, null]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleCarDetailsChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const updatedImages = [...carImages];
      updatedImages[index] = URL.createObjectURL(e.target.files[0]);
      setCarImages(updatedImages);
    }
  };

  const renderCarDetailsForm = () => (
    <div>
      <h2 className="text-xl text-white font-semibold mb-4">Fill Your Car Details</h2>
      <div className="space-y-4">
        <input className="input" type="text" name="make" placeholder="Car Make" value={carDetails.make} onChange={handleCarDetailsChange} />
        <input className="input" type="text" name="model" placeholder="Car Model" value={carDetails.model} onChange={handleCarDetailsChange} />
        <input className="input" type="text" name="year" placeholder="Manufacturing Year" value={carDetails.year} onChange={handleCarDetailsChange} />
        <input className="input" type="text" name="kms" placeholder="KMs Driven" value={carDetails.kms} onChange={handleCarDetailsChange} />
        <input className="input" type="text" name="regNo" placeholder="Registration No." value={carDetails.regNo} onChange={handleCarDetailsChange} />
      </div>
    </div>
  );

  const renderCarImageForm = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Upload Your Car Images</h2>
      <div className="flex space-x-4">
        {carImages.map((image, index) => (
          <div key={index} className="w-1/4 h-32 border border-gray-300 flex items-center justify-center relative">
            <input
              type="file"
              className="opacity-0 absolute w-full h-full cursor-pointer"
              onChange={(e) => handleImageUpload(index, e)}
            />
            {image ? (
              <img src={image} alt={`Car ${index + 1}`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white">Upload</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPersonalDetailsForm = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Fill Your Personal Details</h2>
      <div className="space-y-4">
        <input className="input" type="text" name="name" placeholder="Name" value={personalDetails.name} onChange={handlePersonalDetailsChange} />
        <input className="input" type="email" name="email" placeholder="Email ID" value={personalDetails.email} onChange={handlePersonalDetailsChange} />
        <input className="input" type="text" name="mobile" placeholder="Mobile No." value={personalDetails.mobile} onChange={handlePersonalDetailsChange} />
        <input className="input" type="text" name="city" placeholder="City" value={personalDetails.city} onChange={handlePersonalDetailsChange} />
        <div className="flex items-center space-x-2">
          <input className="input" type="text" placeholder="Captcha" value="XKMDO" disabled />
          <input className="input" type="text" name="code" placeholder="Enter Code" value={personalDetails.code} onChange={handlePersonalDetailsChange} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-4/5 md:w-3/5 lg:w-3/5 bg-black border-[1px] p-8 shadow-md rounded">
        <div className="flex justify-between mb-6">
          <div className={`step ${step === 1 ? 'active' : ''}`}>1 Car Details</div>
          <div className={`step ${step === 2 ? 'active' : ''}`}>2 Car Image</div>
          <div className={`step ${step === 3 ? 'active' : ''}`}>3 Personal Details</div>
        </div>
        {step === 1 && renderCarDetailsForm()}
        {step === 2 && renderCarImageForm()}
        {step === 3 && renderPersonalDetailsForm()}
        <div className="flex justify-between mt-6">
          {step > 1 && <button onClick={prevStep} className="btn">Previous</button>}
          {step < 3 && <button onClick={nextStep} className="btn">Next</button>}
          {step === 3 && <button className="btn">Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default ThreeStepForm;
