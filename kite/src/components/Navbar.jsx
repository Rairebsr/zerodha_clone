// components/Navbar.jsx
import React from 'react';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md  px-4 flex items-center justify-between w-full sticky top-0 z-50">
      {/* Left - Sensex & Nifty */}
      
      <div className="flex items-center gap-4 text-sm font-medium">
        <span className="text-green-600">SENSEX: 76,240.15 ▲ 0.28%</span>
        <span className="text-red-600">NIFTY: 23,212.55 ▼ 0.15%</span>
        <div className="h-10 w-px bg-gray-300"></div> 

      </div>

      {/* Middle - Links */}
        <Link to='/dashboard'><img src={assets.kite} className='w-8 mx-8' alt='logo'/></Link>

       <div className="flex gap-6 text-gray-700 text-sm font-semibold">
                
                <ul className='hidden sm:flex gap-10 text-m text-gray-700'>
                    <NavLink to='/dashboard' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Dashboard</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/orders' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Orders</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/holdings' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Holdings</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/position' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Positions</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/bids' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Bids</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                    <NavLink to='/funds' className='flex flex-col items-center gap-1 hover:text-gray-900 transition-all duration-300'>
                        <p>Funds</p>
                        <hr className='w-2/2 border-none h-[1.5px] bg-gray-700 hidden'/>
                    </NavLink>
                </ul>    
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4 text-xl text-gray-600">
        <FaShoppingCart className="hover:text-orange-500 cursor-pointer" />
        <FaBell className="hover:text-orange-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
