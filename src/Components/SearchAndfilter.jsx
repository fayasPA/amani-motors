import React from 'react'
import Navbar from './Navbar'
import SecondHeader from './SecondHeader'
import GradientButton from './Buttons/GradientButton'

function SearchAndfilter() {
  return (
    <div>
      <Navbar />
      <SecondHeader/>
      <div className='flex justify-center items-center pt-5 '>
        <input className='w-60 p-3 rounded-md '  type="text"  /> <button className='bg-slate-800 p-3 rounded-md hover:bg-slate-700'>Search</button>
      </div>
    </div>
  )
}

export default SearchAndfilter
