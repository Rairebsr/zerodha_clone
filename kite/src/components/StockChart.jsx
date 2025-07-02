import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const StockChart = ({ stock }) => {
  if (!stock?.history) return <p>No chart data available.</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{stock.name} - Intraday Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stock.history}>
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
