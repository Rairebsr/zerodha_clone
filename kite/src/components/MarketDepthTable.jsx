import React from 'react';

const MarketDepthTable = ({ depth }) => {
  return (
    <div className="bg-white rounded-md border border-gray-200 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">Market Depth</h2>
        <div className="text-xs text-gray-500">
          <span className="font-medium">LTP:</span> ₹{depth.ltp || '--'} | 
          <span className="font-medium ml-2">Volume:</span> {depth.volume || '--'}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-2">
        <div className="grid grid-cols-2 gap-4 text-xs">
          {/* Bids Table */}
          <div>
            <div className="bg-green-50 px-3 py-1.5 border-b border-green-100 flex justify-between">
              <h3 className="font-semibold text-green-700">Bids</h3>
              <span className="text-green-700 font-medium">Total: {depth.totalBids}</span>
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
                      className="border-b border-gray-100 hover:bg-green-50/50"
                    >
                      <td className="px-2 py-1.5 text-green-700 font-medium">₹{bid.price}</td>
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
            <div className="bg-red-50 px-3 py-1.5 border-b border-red-100 flex justify-between">
              <h3 className="font-semibold text-red-700">Offers</h3>
              <span className="text-red-700 font-medium">Total: {depth.totalOffers}</span>
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
                      className="border-b border-gray-100 hover:bg-red-50/50"
                    >
                      <td className="px-2 py-1.5 text-red-700 font-medium">₹{offer.price}</td>
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
            <span className="text-green-600">₹{depth.upperCircuit || '--'}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Lower Circuit: </span>
            <span className="text-red-600">₹{depth.lowerCircuit || '--'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDepthTable;