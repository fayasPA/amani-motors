import React, { useState } from 'react';

const DropdownButton = ({ options, type = null }) => {
  let dropDownPlaceholder = 'Select';
  if (type === 'brand') {
    dropDownPlaceholder = 'Any Brand'
  } else if (type === 'model') {
    dropDownPlaceholder = 'Any Model'
  }

  const [selectedOption, setSelectedOption] = useState(dropDownPlaceholder);

  const handleOptionClick = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select className='w-fit focus:outline-none focus:ring-1 focus:ring-black border border-gray-300 bg-white px-2 py-1 text-xs md:text-sm text-gray-700'
      name="" id=""
      defaultValue={""}
      //  value={selectedOption}
      onChange={handleOptionClick} >
      <option value="" selected>{dropDownPlaceholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default DropdownButton;
