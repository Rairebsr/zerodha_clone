import React, { useState } from 'react';

const CalculatorCard = ({ title, children }) => (
  <div className="border rounded-lg p-4 shadow-md w-full">
    <h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>
    {children}
  </div>
);

const EquityCalculatorForm = () => {
  const [buy, setBuy] = useState(1000);
  const [sell, setSell] = useState(1100);
  const [quantity, setQuantity] = useState(400);
  const [exchangeType, setExchangeType] = useState('NSE');
  const turnover = buy * quantity + sell * quantity;

  const brokerage = 40;
  const stt = 105;
  const exchange = exchangeType === 'NSE' ? 25.79 : 30.45;
  const gst = 11.99;
  const sebi = 0.84;
  const stamp = 12;
  const totalCharges = brokerage + stt + exchange + gst + sebi + stamp;
  const netPL = (sell - buy) * quantity - totalCharges;

  const rows = [
    { label: 'Turnover', value: turnover.toFixed(2) },
    { label: 'Brokerage', value: brokerage },
    { label: 'STT', value: stt },
    { label: 'Exchange txn charge', value: exchange },
    { label: 'GST', value: gst },
    { label: 'SEBI charges', value: sebi },
    { label: 'Stamp duty', value: stamp },
    { label: 'Total tax and charges', value: totalCharges.toFixed(2), highlight: true },
    { label: 'Net P&L', value: netPL.toFixed(2), profit: true },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Buy</label>
          <input type="number" value={buy} onChange={(e) => setBuy(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sell</label>
          <input type="number" value={sell} onChange={(e) => setSell(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Exchange</label>
        <select value={exchangeType} onChange={(e) => setExchangeType(e.target.value)} className="w-full border rounded p-2">
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
        </select>
      </div>

      <div className="divide-y border rounded text-sm text-gray-600 mb-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-3 py-2 ${
              row.highlight ? 'font-semibold text-black' : ''
            } ${row.profit ? 'text-green-700 font-bold' : ''}`}
          >
            <span>{row.label}</span>
            <span>₹{row.value}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => window.open('https://zerodha.com/open-account', '_blank')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Contract Note
        </button>
      </div>
    </div>
  );
};

const CurrencyFuturesCalculator = ({ exchangeType }) => {
  const [buy, setBuy] = useState(49.2525);
  const [sell, setSell] = useState(49.2725);
  const [quantity, setQuantity] = useState(1);
  const strikePrice = 1000;

  const brokerage = 29.56;
  const exchange = exchangeType === 'NSE' ? 0.39 : 0.44;
  const gst = exchangeType === 'NSE' ? 5.4 : 5.42;
  const sebi = 0.1;
  const stamp = 0;

  const turnover = ((buy + sell) * quantity * strikePrice);
  const totalCharges = brokerage + exchange + gst + sebi + stamp;
  const netPL = ((sell - buy) * strikePrice * quantity - totalCharges);
  const pointsToBreakeven = (totalCharges / (strikePrice * quantity));
  const pipsToBreakeven = Math.round(pointsToBreakeven * 10000);

  const rows = [
    { label: 'Turnover', value: turnover.toFixed(2) },
    { label: 'Brokerage', value: brokerage },
    { label: 'Exchange txn charge', value: exchange },
    { label: 'GST', value: gst },
    { label: 'SEBI charges', value: sebi },
    { label: 'Stamp duty', value: stamp },
    { label: 'Total tax and charges', value: totalCharges.toFixed(2), highlight: true },
    { label: 'Points to breakeven', value: pointsToBreakeven.toFixed(4) },
    { label: 'Pips to breakeven', value: pipsToBreakeven },
    { label: 'Net P&L', value: netPL.toFixed(2), profit: true },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Buy</label>
          <input type="number" value={buy} onChange={(e) => setBuy(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sell</label>
          <input type="number" value={sell} onChange={(e) => setSell(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
      </div>
      <div className="divide-y border rounded text-sm text-gray-600 mb-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-3 py-2 ${
              row.highlight ? 'font-semibold text-black' : ''
            } ${row.label === 'Net P&L' ? (parseFloat(row.value) >= 0 ? 'text-green-700 font-bold' : 'text-red-600 font-bold') : ''}`}
          >
            <span>{row.label}</span>
            <span>{row.label === 'Net P&L' ? row.value : `₹${row.value}`}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => window.open('https://zerodha.com/open-account', '_blank')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Contract Note
        </button>
      </div>
    </div>
  );
};

const CurrencyOptionsCalculator = ({ exchangeType }) => {
  const [buy, setBuy] = useState(1);
  const [sell, setSell] = useState(2);
  const [quantity, setQuantity] = useState(65);

  const brokerage = 36.49;
  const exchange = exchangeType === 'NSE' ? 0.04 : 0;
  const gst = exchangeType === 'NSE' ? 6.58 : 6.57;
  const sebi = 0.1;
  const stamp = 0;

  const turnover = buy * quantity + sell * quantity;
  const totalCharges = brokerage + exchange + gst + sebi + stamp;
  const netPL = (sell - buy) * quantity - totalCharges;

  const rows = [
    { label: 'Turnover', value: turnover.toFixed(2) },
    { label: 'Brokerage', value: brokerage },
    { label: 'Exchange txn charge', value: exchange },
    { label: 'GST', value: gst },
    { label: 'SEBI charges', value: sebi },
    { label: 'Stamp duty', value: stamp },
    { label: 'Total tax and charges', value: totalCharges.toFixed(2), highlight: true },
    { label: 'Net P&L', value: netPL.toFixed(2), profit: true },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Buy</label>
          <input type="number" value={buy} onChange={(e) => setBuy(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sell</label>
          <input type="number" value={sell} onChange={(e) => setSell(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full border rounded p-2" />
        </div>
      </div>
      <div className="divide-y border rounded text-sm text-gray-600 mb-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-3 py-2 ${
              row.highlight ? 'font-semibold text-black' : ''
            } ${row.label === 'Net P&L' ? (parseFloat(row.value) >= 0 ? 'text-green-700 font-bold' : 'text-red-600 font-bold') : ''}`}
          >
            <span>{row.label}</span>
            <span>{row.label === 'Net P&L' ? row.value : `₹${row.value}`}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => window.open('https://zerodha.com/open-account', '_blank')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Contract Note
        </button>
      </div>
    </div>
  );
};
const CommodityFuturesCalculator = () => {
  const [commodity, setCommodity] = useState('ALUMIN');
  const [buy, setBuy] = useState(110);
  const [sell, setSell] = useState(112);
  const [quantity, setQuantity] = useState(1);

  const turnover = (buy + sell) * 1000 * quantity;
  const brokerage = 40;
  const exchangeCharge = 4.66;
  const gst = 8.08;
  const ctt = 11.2;
  const sebi = 0.22;
  const stamp = 2;
  const totalCharges = brokerage + exchangeCharge + gst + ctt + sebi + stamp;
  const netPL = ((sell - buy) * 1000 * quantity) - totalCharges;
  const pointsToBreakeven = (totalCharges / (1000 * quantity)).toFixed(2);

  const rows = [
    { label: 'Turnover', value: turnover.toFixed(2) },
    { label: 'Brokerage', value: brokerage.toFixed(2) },
    { label: 'Exchange charge', value: exchangeCharge.toFixed(2) },
    { label: 'GST', value: gst.toFixed(2) },
    { label: 'CTT', value: ctt.toFixed(2) },
    { label: 'SEBI charges', value: sebi.toFixed(2) },
    { label: 'Stamp duty', value: stamp.toFixed(2) },
    { label: 'Total tax and charges', value: totalCharges.toFixed(2), highlight: true },
    { label: 'Points to breakeven', value: pointsToBreakeven },
    { label: 'Net P&L', value: netPL.toFixed(2), profit: true }
  ];

  return (
    <CalculatorCard title="Futures">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="p-2 border rounded" aria-label="Commodity">
          <option value="ALUMIN">ALUMIN</option>
          <option value="COPPER">COPPER</option>
          <option value="COPPER">CRUDEOIL</option>
          <option value="COPPER">CRUDEOILM</option>
          <option value="COPPER">GOLD</option>
          <option value="COPPER">GOLDM</option>
          <option value="COPPER">NATGASMINI</option>
          <option value="COPPER">NATURALGAS</option>
          <option value="COPPER">SILVER</option>
          <option value="COPPER">SILVERM</option>
          <option value="COPPER">NICKEL</option>
          <option value="COPPER">ZINC</option>
        </select>
        <input type="number" value={buy} onChange={(e) => setBuy(Number(e.target.value))} className="p-2 border rounded" placeholder="Buy" />
        <input type="number" value={sell} onChange={(e) => setSell(Number(e.target.value))} className="p-2 border rounded" placeholder="Sell" />
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="p-2 border rounded" placeholder="Quantity" />
      </div>
      <div className="divide-y border rounded text-sm text-gray-700">
        {rows.map((row, index) => (
          <div key={index} className={`flex justify-between px-4 py-2 ${row.highlight ? 'font-semibold text-black' : ''} ${row.profit ? 'text-green-600 font-bold' : ''}`}>
            <span>{row.label}</span>
            <span>{row.label === 'Net P&L' ? row.value : `₹${row.value}`}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => window.open('https://zerodha.com/open-account', '_blank')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Contract Note
        </button>
      </div>
    </CalculatorCard>
  );
};

const CommodityOptionsCalculator = () => {
  const [commodity, setCommodity] = useState('COPPER');
  const [strike, setStrike] = useState(400);
  const [buy, setBuy] = useState(310);
  const [sell, setSell] = useState(315);
  const [quantity, setQuantity] = useState(1);

  const turnover = 1562500;
  const brokerage = 40;
  const exchangeCharge = 653.13;
  const gst = 125.04;
  const ctt = 393.75;
  const sebi = 1.56;
  const stamp = 23;
  const totalCharges = brokerage + exchangeCharge + gst + ctt + sebi + stamp;
  const netPL = ((sell - buy) * strike * quantity) - totalCharges;
  const pointsToBreakeven = (totalCharges / (strike * quantity)).toFixed(2);

  const rows = [
    { label: 'Turnover', value: turnover.toFixed(2) },
    { label: 'Brokerage', value: brokerage.toFixed(2) },
    { label: 'Exchange charge', value: exchangeCharge.toFixed(2) },
    { label: 'GST', value: gst.toFixed(2) },
    { label: 'CTT', value: ctt.toFixed(2) },
    { label: 'SEBI charges', value: sebi.toFixed(2) },
    { label: 'Stamp duty', value: stamp.toFixed(2) },
    { label: 'Total tax and charges', value: totalCharges.toFixed(2), highlight: true },
    { label: 'Points to breakeven', value: pointsToBreakeven },
    { label: 'Net P&L', value: netPL.toFixed(2), profit: true }
  ];

  return (
    <CalculatorCard title="Options">
      <div className="grid grid-cols-5 gap-4 mb-4">
        <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="p-2 border rounded" aria-label="Commodity">
          <option value="COPPER">COPPER</option>
          <option value="COPPER">CRUDEOIL</option>
          <option value="COPPER">CRUDEOILM</option>
          <option value="COPPER">GOLD</option>
          <option value="COPPER">GOLDM</option>
          <option value="COPPER">NATGASMINI</option>
          <option value="COPPER">NATURALGAS</option>
          <option value="COPPER">SILVER</option>
          <option value="COPPER">SILVERM</option>
          <option value="COPPER">NICKEL</option>
          <option value="COPPER">ZINC</option>
        </select>
        <input type="number" value={strike} onChange={(e) => setStrike(Number(e.target.value))} className="p-2 border rounded" placeholder="Strike Price" />
        <input type="number" value={buy} onChange={(e) => setBuy(Number(e.target.value))} className="p-2 border rounded" placeholder="Buy" />
        <input type="number" value={sell} onChange={(e) => setSell(Number(e.target.value))} className="p-2 border rounded" placeholder="Sell" />
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="p-2 border rounded" placeholder="Quantity" />
      </div>
      <div className="divide-y border rounded text-sm text-gray-700">
        {rows.map((row, index) => (
          <div key={index} className={`flex justify-between px-4 py-2 ${row.highlight ? 'font-semibold text-black' : ''} ${row.profit ? 'text-green-600 font-bold' : ''}`}>
            <span>{row.label}</span>
            <span>{row.label === 'Net P&L' ? row.value : `₹${row.value}`}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => window.open('https://zerodha.com/open-account', '_blank')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Contract Note
        </button>
      </div>
    </CalculatorCard>
  );
};

const CalculatorTabs = () => {
  const [activeTab, setActiveTab] = useState('Equities F&O');
  const [currencyExchange, setCurrencyExchange] = useState('NSE');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-center gap-6 border-b mb-6">
        {['Equities F&O', 'Currency', 'Commodities', 'MTF'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-lg ${
              activeTab === tab ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Currency' && (
        <>
          <div className="mb-4 flex justify-center gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" value="NSE" checked={currencyExchange === 'NSE'} onChange={() => setCurrencyExchange('NSE')} /> NSE
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="BSE" checked={currencyExchange === 'BSE'} onChange={() => setCurrencyExchange('BSE')} /> BSE
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <CalculatorCard title="Currency Futures Calculator">
              <CurrencyFuturesCalculator exchangeType={currencyExchange} />
            </CalculatorCard>
            <CalculatorCard title="Currency Options Calculator">
              <CurrencyOptionsCalculator exchangeType={currencyExchange} />
            </CalculatorCard>
          </div>
          <br />
          <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Symbol</th>
                <th className="p-3 border">USD-INR</th>
                <th className="p-3 border">EUR-INR</th>
                <th className="p-3 border">GBP-INR</th>
                <th className="p-3 border">JPY-INR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-semibold">Market type</td>
                <td className="p-3 border">Normal</td>
                <td className="p-3 border">Normal</td>
                <td className="p-3 border">Normal</td>
                <td className="p-3 border">Normal</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Instrument type</td>
                <td className="p-3 border">FUTCUR</td>
                <td className="p-3 border">FUTCUR</td>
                <td className="p-3 border">FUTCUR</td>
                <td className="p-3 border">FUTCUR</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Unit of trading</td>
                <td className="p-3 border">1 - 1 unit denotes 1000 USD</td>
                <td className="p-3 border">1 - 1 unit denotes 1000 EURO</td>
                <td className="p-3 border">1 - 1 unit denotes 1000 POUND STERLING</td>
                <td className="p-3 border">1 - 1 unit denotes 1000 JAPANESE YEN</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Underlying / Order quotation</td>
                <td className="p-3 border">The exchange rate in Indian Rupees for US Dollars</td>
                <td className="p-3 border">The exchange rate in Indian Rupees for Euro</td>
                <td className="p-3 border">The exchange rate in Indian Rupees for Pound Sterling</td>
                <td className="p-3 border">The exchange rate in Indian Rupees for 100 Japanese Yen</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Tick size</td>
                <td className="p-3 border" colSpan="4">₹ 0.25 paise or INR 0.0025</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Trading hours</td>
                <td className="p-3 border" colSpan="4">9:00 am to 5:00 pm (Monday to Friday on working days)</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Contract trading cycle</td>
                <td className="p-3 border" colSpan="4">12 month trading cycle</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Last trading day</td>
                <td className="p-3 border" colSpan="4">Two working days prior to the last business day of the expiry month at 12:30 PM.</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Final settlement day</td>
                <td className="p-3 border" colSpan="4">Last working day (excluding Saturdays) of the expiry month. 
                    The last working day will be the same as that for interbank Settlements in Mumbai</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Quantity freeze</td>
                <td className="p-3 border" colSpan="4">10,001 or greater</td>
              </tr>
            </tbody>
          </table>
          <div className="p-6 max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-2xl font-semibold mb-6">Sample contract note (ECN)</h2>
        <div className="flex justify-center gap-6 mb-10">
          <button className="border px-8 py-3 text-lg rounded bg-gray-100 font-semibold text-gray-700">
            Equity & currency (0)
          </button>
          <button className="border px-8 py-3 text-lg rounded text-gray-500 hover:bg-gray-50">
            Commodities (0)
          </button>
        </div>
        <hr className="my-8" />
        <h3 className="text-3xl font-bold mb-2">Open a Zerodha account</h3>
        <p className="text-gray-600 mb-6">
          Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg">
          Sign up for free
        </button>
      </div>
          
        </div>
        </>
      )}

      {activeTab === 'Equities F&O' && (
        <div className="grid md:grid-cols-2 gap-4">
          <CalculatorCard title="Equity Delivery Calculator">
            <EquityCalculatorForm />
          </CalculatorCard>
          <CalculatorCard title="Equity Intraday Calculator">
            <EquityCalculatorForm />
          </CalculatorCard>
          <CalculatorCard title="Equity Futures Calculator">
            <EquityCalculatorForm />
          </CalculatorCard>
          <CalculatorCard title="Equity Options Calculator">
            <EquityCalculatorForm />
          </CalculatorCard>
        </div>
      )}

      {activeTab === 'Commodities' && (
        <div className="text-center">
            <div className="grid md:grid-cols-2 gap-4">
            <CalculatorCard title="Commodity Futures Calculator">
              <CommodityFuturesCalculator exchangeType={currencyExchange} />
            </CalculatorCard>
            <CalculatorCard title="Commodity Options Calculator">
              <CommodityOptionsCalculator exchangeType={currencyExchange} />
            </CalculatorCard>
          </div>
          <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Profit/Loss made for every ₹1 change in
      </h2>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">ALUMINI</h3>
      <div className="text-blue-600 text-4xl font-semibold mb-6">₹ 50</div>

      <div className="grid grid-cols-2 text-sm text-gray-700 gap-4 mb-4">
        <div>
          <span className="font-medium">Base value</span><br />
          Per kg
        </div>
        <div>
          <span className="font-medium">Trading unit</span><br />
          1 MT
        </div>
        <div className="col-span-2">
          <span className="font-medium">MMBTU</span> = Metric Million British Thermal Unit
        </div>
        <div className="col-span-2">
          <span className="font-medium">MT</span> (Metric Ton) = 1000 Kilos / 10 Quintals
        </div>
        <div className="col-span-2">
          <span className="font-medium">Quintal</span> = 100 Kilos
        </div>
      </div>
    </div>
    <div className="text-xs text-gray-500 mt-6 border-t pt-4">
        * Levied by the government and exchanges<br />
        <a href="#" className="text-blue-600 underline">DP charges</a> applicable on equity delivery sell transactions. <a href="/pricing" className="text-blue-600 underline">All charges explained.</a><br />
        Exchange transaction charges may vary depending on the category of the stock. To know more, read <a href="#" className="text-blue-600 underline">Why am I being charged higher exchange transaction charges for my trades?</a>
      </div>
          <div className="p-6 max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-2xl font-semibold mb-6">Sample contract note (ECN)</h2>
        <div className="flex justify-center gap-6 mb-10">
          <button className="border px-8 py-3 text-lg rounded bg-gray-100 font-semibold text-gray-700">
            Equity & currency (0)
          </button>
          <button className="border px-8 py-3 text-lg rounded text-gray-500 hover:bg-gray-50">
            Commodities (0)
          </button>
        </div>
        <hr className="my-8" />
        <h3 className="text-3xl font-bold mb-2">Open a Zerodha account</h3>
        <p className="text-gray-600 mb-6">
          Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg">
          Sign up for free
        </button>
      </div>
        </div>
      )}

      {activeTab === 'MTF' && (
        <div className="text-center text-gray-400">MTF calculator link or logic...</div>
      )}
    </div>
  );
};

export default CalculatorTabs;
