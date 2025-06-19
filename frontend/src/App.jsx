import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Supports from './pages/Supports';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

  // Set which paths should be full-width
  const fullWidthRoutes = ['/support'];

  // Check if current path is in full-width list
  const isFullWidth = fullWidthRoutes.includes(location.pathname);

  return (
    <div>
      {/* Always full-width */}
      <NavBar />

      {/* Conditionally padded main content */}
      <div className={isFullWidth ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Supports />} />
        </Routes>
      </div>

      {/* Always full-width */}
      <Footer />
    </div>
  );
};

export default App;
