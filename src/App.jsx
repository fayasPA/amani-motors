import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout';
import About from './pages/About/About';
import Cars from './pages/StockCars/Cars';
import SellCar from './pages/SellCar/SellCar';
import CarDetails from './pages/CarDetail/CarDetails';
import Gallery from './pages/Gallery/Gallery';
import NotFoundPage from './pages/ErrorPage/NotFoundPage';
import Showroom from './pages/Showroom/Showroom';
import Insurance from './pages/Insurance/Insurance';
import Calculator from './pages/Calculator/Calculator';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="vehicles" >
          <Route path="" element={<Cars />} />
          <Route path=":carId/*" element={<CarDetails />} />
        </Route>
        <Route path="sellcar" element={<SellCar />} />
        <Route path="showroom" element={<Showroom />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="emi-calculator" element={<Calculator />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
