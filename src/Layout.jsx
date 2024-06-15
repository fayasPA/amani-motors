import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondHeader from './Components/SecondHeader'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div className='flex'>
      <div className=' hidden md:flex w-20'>
        <SecondHeader />
      </div>
      <div className='flex-1'>
        <Navbar />
        <div className=''>
        <Outlet />
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout