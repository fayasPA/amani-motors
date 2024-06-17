import React, { useState } from 'react';

const DropdownButton = ({ options, type = null, setSelectedType, selectedValue   }) => {
  // console.log(selectedValue)
  let dropDownPlaceholder = 'Select';
  if (type === 'brand') {
    dropDownPlaceholder = 'Brand'
  } else if (type === 'body_type') {
    dropDownPlaceholder = 'Body Type'
  } else if (type === 'fuel_type') {
    dropDownPlaceholder = 'Fuel Type'
  }

  const handleOptionClick = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <select
      className="w-full md:w-fit focus:outline-none focus:ring-1 focus:ring-black border border-gray-300 bg-white px-2 py-1 text-xs md:text-sm text-gray-700"
      name={type}
      id=""
      defaultValue={selectedValue}
      onChange={handleOptionClick}
    >
      <option value="" className='text-gray' >{dropDownPlaceholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>

  );
};

export default DropdownButton;
