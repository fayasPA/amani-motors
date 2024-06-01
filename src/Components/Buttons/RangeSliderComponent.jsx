import React, { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const RangeSliderComponent = () => {
  const [value, setValue] = useState(500000);

  const handleChange = (event) => {
    console.log("RangeValue", event.target.value)
    setValue(Number(event.target.value));
  };

  return (
    <>
    <div className="px-10 flex justify-center items-center gap-5">
      <span className="text-sm whitespace-nowrap">PRICE RANGE</span>
      <RangeSlider min={1000000} max={40000000} defaultValue={[1000000, 9000000]} step={10000} className="border border-gray-200" id="range-slider-component"  onChange={handleChange} />
    </div>
    {/* <div className="w-[80%] flex justify-around">
      <span>Rs 1000000</span>
      <span>Rs 40000000</span>
      </div> */}
    </>
    
  );
};

export default RangeSliderComponent;
