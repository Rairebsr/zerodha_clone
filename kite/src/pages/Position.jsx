import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import StockModal from '../components/StockModel';

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [userId, setUserId] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setUserId(decoded.id);
      } catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (userId) fetchPositions();
  }, [userId]);

  const fetchPositions = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/order/getposition/${userId}`);
      const enriched = res.data.map((pos) => {
        const price = pos.price;
        // Simulate LTP with ±5%
        const fluctuation = price * (Math.random() * 0.1 - 0.05); // ±5%
        const ltp = +(price + fluctuation).toFixed(2);
        const pnl = +((ltp - price) * pos.quantity).toFixed(2);
        return { ...pos, ltp, pnl };
      });
      setPositions(enriched);
    } catch (err) {
      console.error('Failed to fetch positions:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Positions</h2>

      {positions.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded shadow">
          <img
            src={assets.anchoricon}
            alt="No Positions"
            className="w-28 h-28 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-700">
            You don’t have any positions
          </h3>
          <p className="text-gray-500 mt-2">
            Start trading to see your active positions here.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Symbol</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Buy Price</th>
                <th className="px-4 py-2">LTP</th>
                <th className="px-4 py-2">P&L</th>
                <th className="px-4 py-2">Order Type</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {positions.map(pos => (
                <tr key={pos._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{pos.stockName}</td>
                  <td className="px-4 py-2">{pos.stockSymbol}</td>
                  <td className="px-4 py-2">{pos.quantity}</td>
                  <td className="px-4 py-2">₹{pos.price.toFixed(2)}</td>
                  <td className="px-4 py-2 text-blue-600">₹{pos.ltp.toFixed(2)}</td>
                  <td className={`px-4 py-2 font-semibold ${pos.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₹{pos.pnl.toFixed(2)}
                  </td>
                  <td className="px-4 py-2">{pos.orderType}</td>
                  <td className="px-4 py-2">{pos.productType}</td>
                  <td className="px-4 py-2">
                    {new Date(pos.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showModal && <StockModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Positions;
