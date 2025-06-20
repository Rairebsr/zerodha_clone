import React from 'react'
import { assets } from '../assets/assets'

const Supports = () => {
  return (
    <div>
      <div className="bg-[#2f7dc4] text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Left Side */}
          <div className="space-y-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <h2 className="text-2xl font-semibold mb-3">Support Portal</h2>
            <p className="text-2xl mb-3">Search for an answer or browse help topics to create a ticket</p>

            {/* Search Box */}
            <div className="bg-white rounded-md flex items-center px-4 py-2 w-full max-w-xl">
              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                className="flex-1 text-black outline-none"
              />
                <img className='w-5' src={assets.search} alt="" />
              
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm text-white underline underline-offset-2 mt-4">
              <a href="#" className="text-lg hover:text-gray-200">Track account opening</a>
              <a href="#" className="text-lg hover:text-gray-200">Track segment activation</a>
              <a href="#" className="text-lg hover:text-gray-200">Intraday margins</a>
              <a href="#" className="text-lg hover:text-gray-200">Kite user manual</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/3  text-white space-y-3">
            <p className="text-md font-medium underline underline-offset-4">
              <a href="#" className="hover:text-gray-200">Track tickets</a>
            </p>
          </div>
          <div className="absolute bottom-[4cm] right-[2cm] text-white">
            <p className="text-2xl font-semibold">Featured</p>
            <ul className="mt-2 mb-10 text-sm list-decimal list-inside space-y-10">
              <li>
                <a href="#" className="underline underline-offset-4 hover:text-gray-200">
                  Surveillance measure on scrips - June 2025
                </a>
              </li>
              <li>
                <a href="#" className="underline underline-offset-4  hover:text-gray-200">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-6 md:px-20">
  <h2 className="text-xl text-gray-500 mb-12 ">
    To create a ticket, select a relevant topic
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

    {/* 1. Account Opening */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-rr-add"></i></span> Account Opening
      </h3>
      <ul className="text-blue-600 space-y-1  text-sm">
        <li><a href="#">Resident individual</a></li>
        <li><a href="#">Minor</a></li>
        <li><a href="#">Non Resident Indian (NRI)</a></li>
        <li><a href="#">Company, Partnership, HUF and LLP</a></li>
        <li><a href="#">Glossary</a></li>
      </ul>
    </div>

    {/* 2. Your Zerodha Account */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-rr-user"></i></span> Your Zerodha Account
      </h3>
      <ul className="text-blue-600 space-y-1 text-sm">
        <li><a href="#">Your Profile</a></li>
        <li><a href="#">Account modification</a></li>
        <li><a href="#">Client Master Report (CMR) and DP</a></li>
        <li><a href="#">Nomination</a></li>
        <li><a href="#">Transfer and conversion of securities</a></li>
      </ul>
    </div>

    {/* 3. Kite */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-rr-stats"></i></span> Kite
      </h3>
      <ul className="text-blue-600 space-y-1 text-sm">
        <li><a href="#">IPO</a></li>
        <li><a href="#">Trading FAQs</a></li>
        <li><a href="#">Margin Trading & MTF</a></li>
        <li><a href="#">Charts and orders</a></li>
        <li><a href="#">Alerts and Nudges</a></li>
        <li><a href="#">General</a></li>
      </ul>
    </div>

    {/* 4. Funds */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-rr-credit-card"></i></span> Funds
      </h3>
      <ul className="text-blue-600 space-y-1 text-sm">
        <li><a href="#">Add money</a></li>
        <li><a href="#">Withdraw money</a></li>
        <li><a href="#">Add bank accounts</a></li>
        <li><a href="#">eMandates</a></li>
      </ul>
    </div>

    {/* 5. Console */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-rs-shield-check"></i></span> Console
      </h3>
      <ul className="text-blue-600 space-y-1 text-sm">
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Corporate actions</a></li>
        <li><a href="#">Funds statement</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Segments</a></li>
      </ul>
    </div>

    {/* 6. Coin */}
    <div>
      <h3 className="flex items-center text-lg font-semibold mb-3">
        <span className="mr-2 text-xl"><i className="fi fi-ts-usd-circle"></i></span> Coin
      </h3>
      <ul className="text-blue-600 space-y-1 text-sm">
        <li><a href="#">Mutual funds</a></li>
        <li><a href="#">National Pension Scheme (NPS)</a></li>
        <li><a href="#">Features on Coin</a></li>
        <li><a href="#">Payments and Orders</a></li>
        <li><a href="#">General</a></li>
      </ul>
    </div>

  </div>
</div>

    </div>
  )
}

export default Supports
