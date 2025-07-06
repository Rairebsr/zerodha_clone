import React, { useState } from 'react';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';

const CartModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Cart state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'RELIANCE' },
    { id: 2, name: 'TCS' },
    { id: 3, name: 'INFY' },
    { id: 4, name: 'HDFCBANK' },
  ]);

  // Filter based on search term
  const filteredItems = cartItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle remove
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-28 z-50">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center p-4 border-b font-semibold text-lg gap-2">
          <FaShoppingBasket className="text-gray-600" />
          Basket
        </div>

        {/* Search */}
        <div className="flex items-center p-4 gap-2 border-b">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Search & add"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setCartItems([])}
            className="text-blue-500 hover:underline text-sm"
          >
            Clear basket
          </button>
        </div>

        {/* Cart items */}
        <div className="p-4 min-h-[150px]">
          {filteredItems.length === 0 ? (
            <p className="text-center text-gray-500">No instruments found</p>
          ) : (
            <ul className="space-y-2">
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border p-2 rounded-md shadow-sm"
                >
                  <span>{item.name}</span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center p-4 gap-2 border-t">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Place all
          </button>
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
