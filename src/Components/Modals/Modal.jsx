// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4">
          X
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">
          Get a Free Consultation
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name *</label>
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
          <button
            type="submit"
            className="w-full px-3 py-2 bg-yellow-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
