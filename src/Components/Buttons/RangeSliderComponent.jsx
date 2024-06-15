import React, { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import '/src/assets/styles/rangeSliderStyle.css'
import { getNumberToCurrencyText } from "../../utils/helperFunctions";


const RangeSliderComponent = () => {
  const [value, setValue] = useState([1000000, 9000000]);

  const handleChange = (range) => {
    setValue(range);
  };

  return (
    <>
      <div className="w-full">
      <div className="px-0 md:px-10 py-5 flex flex-col md:flex-row justify-center items-start md:items-center gap-5">
        <span style={{fontSize: '.8em'}} className=" whitespace-nowrap">PRICE RANGE</span>
        <div className="range-slider-div flex flex-col w-full">
          <RangeSlider 
            min={100000} 
            max={40000000} 
            defaultValue={value}  
            step={10000} 
            className=" border border-gray-200 range-slider-component" 
            id="range-slider-component" 
            onInput={handleChange} 
          />
          <div style={{fontSize: '.8em'}} className="flex justify-between pt-3 ">
            <span>{getNumberToCurrencyText(value[0])}</span>
            <span>{getNumberToCurrencyText(value[1])}</span>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="w-[80%] flex justify-around">
      </div> */}
    </>

  );
};

export default RangeSliderComponent;
