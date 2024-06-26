import React, { useEffect, useState } from 'react';
import DropdownButton from './Buttons/DropDown2';
import RangeSliderComponent from './Buttons/RangeSliderComponent';
import { useNavigate } from 'react-router-dom';
import { GET_FILTER_TYPES } from '../utils/urls';
import { axiosAPI } from '../utils/axiosAPI';

function FilterSearch({ brandSel = null, fuelTypeSel = null, carTypeSel = null, minPriceSel = null, maxPriceSel = null }) {
  const axiosInstance = axiosAPI();
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(brandSel || '');
  const [selectedCarType, setSelectedCarType] = useState(carTypeSel || '');
  const [selectedFuelType, setSelectedFuelType] = useState(fuelTypeSel || '');
  const [priceRange, setPriceRange] = useState([minPriceSel || 500000, maxPriceSel || 5000000]);

  useEffect(() => {
    getFilterTypes();
  }, []);

  async function getFilterTypes() {
    try {
      const response = await axiosInstance.get(GET_FILTER_TYPES);
      if (response.status === 200) {
        setBrands(response.data.brands);
        setVehicleTypes(response.data.car_types);
        setFuelTypes(response.data.fuel_types);
      }
    } catch (error) {
      console.error("Error fetching filter types:", error);
    }
  }

  const handleFilter = () => {
    const query = new URLSearchParams({
      brand_id: selectedBrand,
      car_type: selectedCarType,
      fuel_type: selectedFuelType,
      min_price: priceRange[0],
      max_price: priceRange[1],
    }).toString();

    navigate(`/vehicles?${query}`);
  };

  // Function to reset filter values
  const resetFilters = () => {
    setSelectedBrand('');
    setSelectedCarType('');
    setSelectedFuelType('');
    setPriceRange([500000, 5000000]); // Set your default price range here
  };
  useEffect(() => {
    if (!brandSel && !fuelTypeSel && !carTypeSel && !minPriceSel && !maxPriceSel) {
      resetFilters();
    }
  }, [brandSel, fuelTypeSel, carTypeSel, minPriceSel, maxPriceSel]);

  return (
    <div className='p-5 text-black w-full bg-white border-b-2 border-b-gray-300 shadow-lg'>
      <div className='p-0 md:p-3 grid grid-cols-3 gap-2 justify-around w-full lg:w-[70%]'>
        <DropdownButton selectedValue={selectedBrand} setSelectedType={setSelectedBrand} type='brand' options={brands} />
        <DropdownButton selectedValue={selectedCarType} setSelectedType={setSelectedCarType} type='body_type' options={vehicleTypes} />
        <DropdownButton selectedValue={selectedFuelType} setSelectedType={setSelectedFuelType} type='fuel_type' options={fuelTypes} />
      </div>
      <div className='w-full flex flex-col md:flex-row items-start md:items-center'>
        <div className='w-full md:w-[70%]'>
          <div className='w-full'>
            <RangeSliderComponent setRange={setPriceRange} min={50000} max={20000000} initialValue={priceRange} />
          </div>
        </div>
        <div className='flex-1 flex w-full md:w-auto justify-center md:justify-start'>
          <button onClick={handleFilter} className='bg-gray-700 font-bold text-white text-xs md:text-sm p-2'>Filter Vehicles</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
