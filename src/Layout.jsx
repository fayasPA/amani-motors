import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondHeader from './Components/SecondHeader'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className='flex'>
      <ToastContainer />
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