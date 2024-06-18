import React from 'react';

const DropdownButton = ({ options, type = null, setSelectedType, selectedValue = null }) => {
  const dropDownPlaceholder = {
    brand: 'Brand',
    body_type: 'Body Type',
    fuel_type: 'Fuel Type'
  }[type] || 'Select';

  const handleOptionClick = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <select
      className="w-full md:w-fit focus:outline-none focus:ring-1 focus:ring-black border border-gray-300 bg-white px-2 py-1 text-xs md:text-sm text-gray-700"
      name={type}
      value={selectedValue}
      onChange={handleOptionClick}
    >
      <option value="" className='text-gray'>{dropDownPlaceholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default DropdownButton;
