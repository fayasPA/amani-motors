import React from 'react';
import './GradientButton.css'; // Import the CSS file for custom styles
import { CiSearch } from 'react-icons/ci';


const GradientButton = () => {
  return (
    <button className="gradient-button1 text-2xl">
     <CiSearch/> Find Your Car
    </button>
  );
};

export default GradientButton;