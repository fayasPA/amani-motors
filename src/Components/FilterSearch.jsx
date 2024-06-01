import React from 'react'
import DropdownButton from './Buttons/DropDown2';
import RangeSliderComponent from './Buttons/RangeSliderComponent';

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Volkswagen",
  "Audi",
  "BMW",
  "Mercedes-Benz"
];
const model = [
  "Anymodel"
];
const status = [
  "All",
  "PreOwned",
  "Unregistered"
];


function FilterSearch() {
  return (
    <div className='p-5 text-black w-full bg-white border-b-2 border-b-gray-300 shadow-lg'>
      <div className='p-3 flex justify-around w-[70%] '>
        <DropdownButton options={carBrands} type={'brand'} />
        <DropdownButton type={'model'} options={model} />
      </div>
      <div className='w-full flex items-center '>
        <div className=' w-[70%] '>
        <div className='w-full'> <RangeSliderComponent /></div>
        </div>
        <div className='flex-1'>
        <button className='bg-gray-700 font-bold text-white text-xs md:text-sm p-2 '>Search the Vehicle</button>
        </div>
      </div>

    </div>
  )
}

export default FilterSearch
