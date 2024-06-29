import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SecondHeader from './Components/SecondHeader'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import FloatingBtn from './Components/FloatingBtn'
import Loader from './Components/Loader'
import 'react-range-slider-input/dist/style.css';

const Layout = () => {
  const [loaded, setLoaded] = useState(false);
  const [exitLoader, setExitLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExitLoader(true);
    }, 3000);
  }, []);

  return (
    <div className='flex'>
      <ToastContainer />
      <Loader
        onExit={() => {
          setLoaded(true);
        }}
      />
      {loaded && (
        <FloatingBtn />
      )}
      <div className=' hidden md:flex w-20'>
        {loaded && (
          <SecondHeader />
        )}
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