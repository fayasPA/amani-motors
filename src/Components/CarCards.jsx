import React from 'react'
import {Latest_Products} from '../Components/Data'
import FilterSearch from './FilterSearch';
import { Link } from 'react-router-dom';

function CarCards() {

    return (
        <div className="container mx-auto p-4 mt-4 text-black ">
          <div className='h-32  relative w-[95%]'>
            <div className='absolute top-[-20%] w-full'>
            <FilterSearch />
            </div>
          </div>
          <div className='flex justify-start  font-bold items-center text-2xl pb-10 '>NEW AND PRE OWNED LUXURY PREMIUM CARS</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {Latest_Products.map((product) => (
              <div key={product.id} className=" p-4 rounded-lg shadow-lg">
                <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-center font-bold text-lg mb-2">{product.build_company} {product.name}</div>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/></svg>
                    <span>{product.year}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.34 15.48l-.11-.09-5.72-4.5c-.05-.04-.1-.07-.16-.1a4.74 4.74 0 0 0-5.49 0c-.06.03-.11.06-.16.1l-5.72 4.5c-.08.06-.15.14-.21.22-.01.02-.02.03-.03.05-.1.17-.15.37-.13.57.01.04.01.07.02.1.06.33.26.62.53.8.01.01.03.01.04.02.1.06.2.1.31.12.04.01.07.01.11.02h16c.03 0 .07-.01.11-.02.11-.02.21-.06.31-.12.01-.01.03-.01.04-.02.27-.18.47-.47.53-.8.01-.04.01-.07.02-.1.02-.2-.03-.4-.13-.57 0-.02-.01-.03-.03-.05a1.15 1.15 0 0 0-.21-.22zM12 3.5c1.38 0 2.5 1.12 2.5 2.5S13.38 8.5 12 8.5 9.5 7.38 9.5 6 10.62 3.5 12 3.5z"/></svg>
                    <span>{product.fuel_type}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z"/></svg>
                    <span>{product.kms_driven.toLocaleString()} KMS</span>
                  </div>
                </div>
                <div className="text-center font-semibold text-lg text-zinc mb-4">₹{product.price.toLocaleString()}</div>
                <Link to={`/products/${product.id}`} >
                <button className="bg-gradient-to-r from-gray-800  to-gray text-white font-semibold py-2 px-4 rounded w-full">SEE DETAIL</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default CarCards;