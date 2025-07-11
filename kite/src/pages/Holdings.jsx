import React, { useEffect, useState, useContext } from 'react';
import { userContext } from '../context/userContext';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import StockModal from '../components/StockModel';
import OrderModal from '../components/OrderModel';
import GTTModal from '../components/GTTModal';
import { assets } from '../assets/assets';


const Holdings = () => {
  const { showBuyModal, setShowBuyModal } = useContext(userContext);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showGTTModal, setShowGTTModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [mode, setMode] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [equityFilter, setEquityFilter] = useState('All Equity');
  const [holdings, setHoldings] = useState([]);
  const [userId, setUserId] = useState('');

  // Decode token and extract user ID
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
    }
  }, []);

  // Fetch holdings when userId is set
  useEffect(() => {
    if (userId) fetchHoldings();
  }, [userId]);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/order/getorder/${userId}`);
      setHoldings(res.data);
    } catch (error) {
      console.error("Error fetching holdings:", error);
    }
  };

  const handleStockModal = () => setShowStockModal(true);

  const handleBuySell = (stock, action) => {
  const normalizedStock = {
    name:  stock.stockName,
    symbol: stock.stockSymbol,
    price:  stock.currentPrice || 0,
    open: stock.open || stock.price || 0,
    ...stock
  };

  
  console.log("Normalized Stock in handleBuySell:", normalizedStock);

  

  setSelectedStock(normalizedStock);
  setMode(action);
  setShowBuyModal(true);
};

useEffect(() => {
  if (selectedStock) {
    console.log("Selected stock after normalization:", selectedStock);
  }
}, [selectedStock]);


  const filteredHoldings = holdings.filter(
  (h) =>
    activeTab === 'All' ||
    (activeTab === 'Equity' && h.productType === 'Longterm')
);
console.log(filteredHoldings);



  const handleGTT = (stock) => {
    
    setSelectedStock(stock);
    setShowGTTModal(true);
  };

  return (
    <div className="p-4">

      {/* Secondary Navbar */}
      <div className="mb-6">
        <div className="flex border-b">
          {['All', 'Equity', 'Mutual Funds'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === tab 
                  ? 'border-b-2 border-orange-500 text-orange-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center  pb-4">
        <h1 className="text-2xl font-semibold text-gray-700">Holdings</h1>
      </div>

      {/* Equity Filter */}
      {activeTab === 'Equity' && (
        <div className="mb-6 flex items-center justify-between bg-gray-50 p-3 rounded">
          <label className="text-sm font-medium text-gray-700">Filter by Source:</label>
          <select
            value={equityFilter}
            onChange={(e) => setEquityFilter(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
          >
            {['All Equity', 'MTF', 'Kite', 'Smallcase'].map(filter => (
              <option key={filter}>{filter}</option>
            ))}
          </select>
        </div>
      )}
      

      {/* Empty State or Holdings */}
      {activeTab !== 'Mutual Funds'&&(
        filteredHoldings.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded shadow">
          <img src={assets.holdings} className="w-24 mx-auto mb-4" alt="empty" />
          <h3 className="text-lg font-semibold">You don't have any holdings yet.</h3>
          <p className="mt-2 text-gray-500">Start now by adding stocks or mutual funds.</p>
          <button 
            onClick={handleStockModal} 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2">Instrument</th>
                <th className="text-left px-4 py-2">Qty</th>
                <th className="text-left px-4 py-2">Avg.Price</th>
                <th className="text-left px-4 py-2">Current Value</th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHoldings
                .filter((h) => activeTab === 'All' || (activeTab === 'Equity' && h.productType === 'Longterm') )
                .map((h) => (
                  <tr key={h._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{h.stockName} ({h.stockSymbol})</td>
                    <td className="px-4 py-2">{h.quantity}</td>
                    <td className="px-4 py-2">₹{(h.price / h.quantity).toFixed(2)}</td>
                    <td className="px-4 py-2">₹{(h.price * h.quantity).toFixed(2)}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleBuySell(h, 'B')}
                        className="text-blue-600 border border-blue-600 px-2 py-1 rounded hover:bg-blue-50"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => handleBuySell(h, 'S')}
                        className="text-orange-600 border border-orange-500 px-2 py-1 rounded hover:bg-orange-50"
                      >
                        Sell
                      </button>
                      <button
                        onClick={() => handleGTT(h)}
                        className="text-gray-700 border border-gray-400 px-2 py-1 rounded hover:bg-gray-100"
                      >
                        GTT
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )
      )}
      {/* Mutual Funds CTA */}
{activeTab === 'Mutual Funds' && (
  <div className="mb-6 flex justify-center bg-blue-50 p-6 rounded shadow">
    <div className="flex flex-col items-center text-center gap-3">
      <img src={assets.coin} alt="Coin Logo" className="w-16 h-16" />
      <h3 className="text-md font-medium text-gray-800">
        Start investing in commission-free direct mutual funds.
      </h3>
      <p className="text-sm text-gray-600">
        Trusted by millions. Powered by Coin.
      </p>
      <button
        onClick={() => window.open('https://coin.zerodha.com', '_blank')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open Coin
      </button>
    </div>
  </div>
)}



      
      {showBuyModal && selectedStock && (
        <OrderModal
          stock={selectedStock}
          st={mode}
          userHoldings={holdings}
          closeModal={() => {
            setShowBuyModal(false);
          }}
        />
      )}
      {showGTTModal && selectedStock && (
        <GTTModal
          stock={selectedStock}
          closeModal={() => setShowGTTModal(false)}
        />
      )}
    </div>
  );
};

export default Holdings;