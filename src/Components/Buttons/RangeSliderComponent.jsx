import React, { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import '../../assets/styles/rangeSliderStyle.css'
import { getNumberToCurrencyText } from "../../utils/helperFunctions";


const RangeSliderComponent = ({ min, max, setRange, initialValue }) => {

  const handleChange = (selectedRange) => {
    // console.log(selectedRange)
    setRange(selectedRange);
  };

  return (
    <>
      <div className="w-full">
      <div className="px-0 md:px-10 py-5 flex flex-col md:flex-row justify-center items-start md:items-center gap-5">
        <span style={{fontSize: '.8em'}} className=" whitespace-nowrap">PRICE RANGE</span>
        <div className="range-slider-div flex flex-col w-full">
          <RangeSlider 
            min={min}
            max={max} 
            value={initialValue}
            step={[20000, 20000]} 
            className=" border border-gray-200 range-slider-component" 
            id="range-slider-component" 
            onInput={handleChange} 
          />
          <div style={{fontSize: '.8em'}} className="flex justify-between pt-3 ">
            <span>{getNumberToCurrencyText(initialValue[0])}</span>
            <span>{getNumberToCurrencyText(initialValue[1])}</span>
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
