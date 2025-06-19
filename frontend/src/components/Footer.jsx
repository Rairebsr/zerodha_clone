import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Zerodha Logo & Social Icons */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {/* Zerodha logo (replace src with your local logo later) */}
            <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" className="h-6" />
          </div>
          <p className="text-sm text-gray-600">© 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="/" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="/" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="/" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="/" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>

          {/* Additional Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="/" className="hover:text-blue-500"><FaYoutube /></a>
            <a href="/" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="/" className="hover:text-blue-500"><FaTelegramPlane /></a>
          </div>
        </div>

        {/* Account */}
        <div>
          <h2 className="font-bold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Open demat account</a></li>
            <li><a href="/" className="hover:underline">Minor demat account</a></li>
            <li><a href="/" className="hover:underline">NRI demat account</a></li>
            <li><a href="/" className="hover:underline">Commodity</a></li>
            <li><a href="/" className="hover:underline">Dematerialisation</a></li>
            <li><a href="/" className="hover:underline">Fund transfer</a></li>
            <li><a href="/" className="hover:underline">MTF</a></li>
            <li><a href="/" className="hover:underline">Referral program</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-bold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Contact us</a></li>
            <li><a href="/" className="hover:underline">Support portal</a></li>
            <li><a href="/" className="hover:underline">How to file a complaint?</a></li>
            <li><a href="/" className="hover:underline">Status of your complaints</a></li>
            <li><a href="/" className="hover:underline">Bulletin</a></li>
            <li><a href="/" className="hover:underline">Circular</a></li>
            <li><a href="/" className="hover:underline">Z-Connect blog</a></li>
            <li><a href="/" className="hover:underline">Downloads</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-bold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">About</a></li>
            <li><a href="/" className="hover:underline">Philosophy</a></li>
            <li><a href="/" className="hover:underline">Press & media</a></li>
            <li><a href="/" className="hover:underline">Careers</a></li>
            <li><a href="/" className="hover:underline">Zerodha Cares (CSR)</a></li>
            <li><a href="/" className="hover:underline">Zerodha.tech</a></li>
            <li><a href="/" className="hover:underline">Open source</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold mb-4">Quick links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Upcoming IPOs</a></li>
            <li><a href="/" className="hover:underline">Brokerage charges</a></li>
            <li><a href="/" className="hover:underline">Market holidays</a></li>
            <li><a href="/" className="hover:underline">Economic calendar</a></li>
            <li><a href="/" className="hover:underline">Calculators</a></li>
            <li><a href="/" className="hover:underline">Markets</a></li>
            <li><a href="/" className="hover:underline">Sectors</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="max-w-7xl mx-auto mt-8 text-xs text-gray-500">
        <p>This clone website is created for educational purposes only and is not affiliated with Zerodha Broking Ltd. Just to learn developing a project:)</p>
      </div>
    </footer>
  );
};

export default Footer;
