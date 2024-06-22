import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout';
import About from './pages/About/About';
import Cars from './pages/StockCars/Cars';
import SellCar from './pages/SellCar/SellCar';
import CarDetails from './pages/CarDetail/CarDetails';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Cars />}>
            <Route index element={<h1>Cars Main Page</h1>} />
            <Route path=":carId/*" element={<CarDetails />} />
          </Route>
          <Route path="sellcar" element={<SellCar />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
