import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { features } from './Features';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    // Common NavLink styling
    const navLinkStyles = ({ isActive }) =>
        isActive
            ? 'flex flex-col items-center gap-1 text-blue-500 underline font-semibold transition-all duration-300'
            : 'flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-all duration-300';

    return (
        <div>
            <div className='flex items-center justify-between py-2 px-6'>
                <Link to='/'><img src={assets.logo} className='w-40' alt='logo' /></Link>

                <ul className='hidden sm:flex gap-10 text-m text-gray-700'>
                    <NavLink to='/signup' className={navLinkStyles}>
                        <p>SignUp</p>
                    </NavLink>
                    <NavLink to='/about' className={navLinkStyles}>
                        <p>About</p>
                    </NavLink>
                    <NavLink to='/products' className={navLinkStyles}>
                        <p>Products</p>
                    </NavLink>
                    <NavLink to='/pricing' className={navLinkStyles}>
                        <p>Pricing</p>
                    </NavLink>
                    <NavLink to='/support' className={navLinkStyles}>
                        <p>Support</p>
                    </NavLink>

                    {/* Dropdown */}
                    <div className='relative'>
                        <img onClick={() => setOpen(!open)} className='w-6 h-6 cursor-pointer' src={assets.drop_icon} alt="" />
                        {open && (
                            <div className='absolute top-10 right-0 w-80 bg-white shadow-xl border rounded-lg z-50 p-4 space-y-4'>
                                {/* Top section */}
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center text-center">
                                            <img src={item.icon} alt={item.title} className="w-8 h-8 mb-2" />
                                            <h3 className="font-semibold text-sm">{item.title}</h3>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <hr />
                                {/* Bottom section */}
                                <div className='flex justify-between'>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold text-sm">Utilities</h4>
                                        <a href="/calculator" className="text-xs text-blue-500 block">Calculator</a>
                                        <a href="/Brokerage" className="text-xs text-blue-500 block">Brokerage Calculator</a>
                                        <a href="/Margin" className="text-xs text-blue-500 block">Margin Calculator</a>
                                        <a href="/sip" className="text-xs text-blue-500 block">SIP Calculator</a>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold text-sm">Updates</h4>
                                        <a href="/z-connect" className="text-xs text-blue-500 block">Z-connect Blog</a>
                                        <a href="/cic-Bull" className="text-xs text-blue-500 block">Circulars/Bulletins</a>
                                        <a href="/ipo" className="text-xs text-blue-500 block">IPOs</a>
                                        <a href="/market" className="text-xs text-blue-500 block">Markets</a>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold text-sm">Education</h4>
                                        <div className="flex gap-3 mt-1">
                                            <img src={assets.varsity} alt="tool1" className="w-5 h-5" />
                                            <img src={assets.trade_qa} alt="tool2" className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
