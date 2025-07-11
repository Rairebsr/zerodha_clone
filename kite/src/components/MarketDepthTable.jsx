import React from 'react';

const MarketDepthTable = () => {
  // Hardcoded data
  const depth = {
    ltp: 1854.50,
    volume: '1.2M',
    totalBids: 1250,
    totalOffers: 980,
    upperCircuit: 2040.00,
    lowerCircuit: 1670.00,
    bids: [
      { price: 1854.00, qty: 120, orders: 5 },
      { price: 1853.75, qty: 85, orders: 3 },
      { price: 1853.50, qty: 210, orders: 8 },
      { price: 1853.25, qty: 65, orders: 2 },
      { price: 1853.00, qty: 180, orders: 6 },
      { price: 1852.75, qty: 95, orders: 4 },
      { price: 1852.50, qty: 150, orders: 5 },
      { price: 1852.25, qty: 70, orders: 3 },
      { price: 1852.00, qty: 130, orders: 4 },
      { price: 1851.75, qty: 90, orders: 3 },
    ],
    offers: [
      { price: 1854.25, qty: 75, orders: 3 },
      { price: 1854.50, qty: 110, orders: 4 },
      { price: 1854.75, qty: 95, orders: 5 },
      { price: 1855.00, qty: 150, orders: 6 },
      { price: 1855.25, qty: 80, orders: 3 },
      { price: 1855.50, qty: 120, orders: 4 },
      { price: 1855.75, qty: 65, orders: 2 },
      { price: 1856.00, qty: 180, orders: 7 },
      { price: 1856.25, qty: 90, orders: 3 },
      { price: 1856.50, qty: 105, orders: 4 },
    ],
  };

  const minPrice = depth.lowerCircuit;
  const maxPrice = depth.upperCircuit;
  const currentPrice = depth.ltp;

  return (
    <div className="bg-white rounded-md border border-gray-200 w-full max-w-4xl mx-auto shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">Market Depth</h2>
        <div className="text-xs text-gray-500">
          <span className="font-medium">LTP:</span> ₹{depth.ltp} | 
          <span className="font-medium ml-2">Volume:</span> {depth.volume}
        </div>
      </div>

      {/* Price Slider */}
      <div className="px-4 py-2 border-b border-gray-200">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>₹{minPrice}</span>
          <span>₹{maxPrice}</span>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div 
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: '0%',
              right: `${100 - ((currentPrice - minPrice) / (maxPrice - minPrice)) * 100}%`
            }}
          ></div>
          <div 
            className="absolute w-3 h-3 bg-blue-600 rounded-full -mt-0.5 -ml-1.5"
            style={{
              left: `${((currentPrice - minPrice) / (maxPrice - minPrice)) * 100}%`
            }}
          ></div>
        </div>
        <div className="text-center text-xs text-gray-600 mt-1">
          Current Price: ₹{currentPrice}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-2">
        <div className="grid grid-cols-2 gap-4 text-xs">
          {/* Bids Table */}
          <div>
            <div className="bg-blue-50 px-3 py-1.5 border-b border-blue-100 flex justify-between">
              <h3 className="font-semibold text-blue-700">Bids</h3>
              <span className="text-blue-700 font-medium">Total: {depth.totalBids}</span>
            </div>
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="px-2 py-1.5 text-left font-medium">Price</th>
                    <th className="px-2 py-1.5 text-right font-medium">Qty</th>
                    <th className="px-2 py-1.5 text-right font-medium">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {depth.bids.map((bid, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-blue-50/50"
                    >
                      <td className="px-2 py-1.5 text-blue-700 font-medium">₹{bid.price}</td>
                      <td className="px-2 py-1.5 text-right">{bid.qty}</td>
                      <td className="px-2 py-1.5 text-right text-gray-500">{bid.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Offers Table */}
          <div>
            <div className="bg-orange-50 px-3 py-1.5 border-b border-orange-100 flex justify-between">
              <h3 className="font-semibold text-orange-700">Offers</h3>
              <span className="text-orange-700 font-medium">Total: {depth.totalOffers}</span>
            </div>
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="px-2 py-1.5 text-left font-medium">Price</th>
                    <th className="px-2 py-1.5 text-right font-medium">Qty</th>
                    <th className="px-2 py-1.5 text-right font-medium">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {depth.offers.map((offer, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-100 hover:bg-orange-50/50"
                    >
                      <td className="px-2 py-1.5 text-orange-700 font-medium">₹{offer.price}</td>
                      <td className="px-2 py-1.5 text-right">{offer.qty}</td>
                      <td className="px-2 py-1.5 text-right text-gray-500">{offer.orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Circuit Limits */}
        <div className="mt-4 px-3 py-2 bg-gray-50 rounded border border-gray-200 flex justify-between text-xs">
          <div>
            <span className="font-medium text-gray-600">Upper Circuit: </span>
            <span className="text-green-600">₹{depth.upperCircuit}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Lower Circuit: </span>
            <span className="text-red-600">₹{depth.lowerCircuit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDepthTable;