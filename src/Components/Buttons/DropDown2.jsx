import React, { useState } from 'react';

const DropdownButton = ({ options, type = null }) => {
  let dropDownPlaceholder = 'Select';
  if (type === 'brand') {
    dropDownPlaceholder = 'Any Brand'
  } else if (type === 'model') {
    dropDownPlaceholder = 'Any Model'
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (event) => {
    console.log(event.target.value)
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className="w-fit focus:outline-none focus:ring-1 focus:ring-black border border-gray-300 bg-white px-2 py-1 text-xs md:text-sm text-gray-700"
      name={type}
      id=""
      defaultValue=""
      onChange={handleOptionClick}
    >
      <option value="" disabled>{dropDownPlaceholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>

  );
};

export default DropdownButton;
