import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FreeEquityImage from '@/assets/pricing-eq.svg';
import IntradayImage from '@/assets/other-trades.svg';
import DirectMFImage from '@/assets/pricing-eq.svg';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('Equity');
  const [showCalculator, setShowCalculator] = useState(false);
  const navigate = useNavigate();

  const tabs = ['Equity', 'Currency', 'Commodity'];

  const openCalculator = () => {
    window.open('/brokerage-calculator', '_blank');
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-4">Charges</h1>
      <p className="text-center text-gray-500 mb-10">List of all charges and taxes</p>

      <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
        <div>
          <img src={FreeEquityImage} alt="Free Equity Delivery" className="mx-auto mb-4 w-30 h-40" />
          <h3 className="text-xl font-semibold mb-2">Free equity delivery</h3>
          <p className="text-gray-500">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>
        <div>
          <img src={IntradayImage} alt="Intraday and F&O Trades" className="mx-auto mb-4 w-30 h-40" />
          <h3 className="text-xl font-semibold mb-2">Intraday and F&O trades</h3>
          <p className="text-gray-500">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div>
          <img src={DirectMFImage} alt="Free Direct MF" className="mx-auto mb-4 w-30 h-40" />
          <h3 className="text-xl font-semibold mb-2">Free direct MF</h3>
          <p className="text-gray-500">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-lg ${activeTab === tab ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Equity' && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border"></th>
                <th className="p-3 border">Equity Delivery</th>
                <th className="p-3 border">Equity Intraday</th>
                <th className="p-3 border">Futures</th>
                <th className="p-3 border">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-semibold">Brokerage</td>
                <td className="p-3 border">Zero Brokerage</td>
                <td className="p-3 border">0.03% or ₹20/executed order</td>
                <td className="p-3 border">0.03% or ₹20/executed order</td>
                <td className="p-3 border">Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">STT/CTT</td>
                <td className="p-3 border">0.1% on buy & sell</td>
                <td className="p-3 border">0.025% on the sell side</td>
                <td className="p-3 border">0.01% on sell side</td>
                <td className="p-3 border">0.05% on sell side (on premium)</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Transaction charges</td>
                <td className="p-3 border">NSE: 0.00297%, BSE: 0.00375%</td>
                <td className="p-3 border">NSE: 0.00297%, BSE: 0.00375%</td>
                <td className="p-3 border">NSE: 0.0021%</td>
                <td className="p-3 border">NSE: 0.053%</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">GST</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">SEBI Charges</td>
                <td className="p-3 border">₹10 per crore</td>
                <td className="p-3 border">₹10 per crore</td>
                <td className="p-3 border">₹10 per crore</td>
                <td className="p-3 border">₹10 per crore</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Stamp Charges</td>
                <td className="p-3 border">0.015% or ₹1500/crore on buy side</td>
                <td className="p-3 border">0.003% or ₹300/crore on buy side</td>
                <td className="p-3 border">0.002% or ₹200/crore on buy side</td>
                <td className="p-3 border">0.003% or ₹300/crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
            {activeTab === 'Currency' && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border"></th>
                <th className="p-3 border">Currency Futures</th>
                <th className="p-3 border">Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-semibold">Brokerage</td>
                <td className="p-3 border">0.03% or ₹ 20/executed order whichever is lower</td>
                <td className="p-3 border">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">STT/CTT</td>
                <td className="p-3 border">	No STT</td>
                <td className="p-3 border">	No STT</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Transaction charges</td>
                <td className="p-3 border">NSE: 0.00035% BSE: 0.00045%</td>
                <td className="p-3 border">NSE: 0.0311% BSE: 0.001%</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">GST</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">SEBI Charges</td>
                <td className="p-3 border">₹10 per crore</td>
                <td className="p-3 border">₹10 per crore</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Stamp Charges</td>
                <td className="p-3 border">	0.0001% or ₹10 / crore on buy side</td>
                <td className="p-3 border">	0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {activeTab === 'Commodity' && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border"></th>
                <th className="p-3 border">Commodity Futures</th>
                <th className="p-3 border">Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-semibold">Brokerage</td>
                <td className="p-3 border">0.03% or ₹ 20/executed order whichever is lower</td>
                <td className="p-3 border">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">STT/CTT</td>
                <td className="p-3 border">	0.01% on sell side (Non-Agri)</td>
                <td className="p-3 border">	0.05% on sell side</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Transaction charges</td>
                <td className="p-3 border">MCX: 0.0021% NSE: 0.0001%</td>
                <td className="p-3 border">MCX: 0.0418% NSE: 0.001%</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">GST</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
                <td className="p-3 border">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">SEBI Charges</td>
                <td className="p-3 border">Agri:₹1 / crore Non-agri:₹10 / crore</td>
                <td className="p-3 border">₹10 / crore</td>
              </tr>
              <tr>
                <td className="p-3 border font-semibold">Stamp Charges</td>
                <td className="p-3 border">0.002% or ₹200 / crore on buy side</td>
                <td className="p-3 border">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <br />
      <div className="mb-10">
        <h1
          className="text-xl font-semibold mb-2 text-blue-600 cursor-pointer"
          onClick={openCalculator}
        >
          Calculate your costs upfront using our brokerage calculator
        </h1>
      </div>
      <div className="w-full">
      <div className="text-xl font-semibold text-center text-gray-800 mb-4">Charges & Taxes Breakdown</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-base mb-1">Securities/Commodities transaction tax</h3>
            <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
            <p className="mt-1">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Transaction/Turnover Charges</h3>
            <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.</li>
              <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
              <li>BSE charges ₹375 per crore for group A, B and other non-exclusive scrips from group E, F, FC, G, GC, W, T (from Dec 1, 2022).</li>
              <li>Charges for M, MT, TS and MS groups is ₹275 per crore.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Call & trade</h3>
            <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Stamp charges</h3>
            <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">NRI brokerage charges</h3>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>₹100 per order for futures and options.</li>
              <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Account with debit balance</h3>
            <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
              <li>Options - ₹50 per crore + GST traded value (premium value)..</li>
              <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Margin Trading Facility (MTF)</h3>
            <ul className="list-disc ml-5">
              <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
              <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
              <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-base mb-1">GST</h3>
            <p>Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">SEBI Charges</h3>
            <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">DP (Depository participant) charges</h3>
            <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
            <p className="mt-1">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
            <p className="mt-1">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Pledging charges</h3>
            <p>₹30 + GST per pledge request per ISIN.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">AMC (Account maintenance charges)</h3>
            <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="#" className="text-blue-600">Click here</a></p>
            <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="#" className="text-blue-600">Click here</a></p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Corporate action order charges</h3>
            <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.

</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Off-market transfer charges

</h3>
            <p>₹25 per transaction.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Physical CMR request</h3>
            <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Payment gateway charges</h3>
            <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Delayed Payment Charges</h3>
            <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="#" className="text-blue-600">Learn More</a></p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-1">Trading using 3-in-1 account with block functionality</h3>
            <ul className="list-disc ml-5">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div>
        <h3>Disclaimer

For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. 
Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. 
Brokerage will not exceed the rates specified by SEBI and the exchanges. 
All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, 
and assigned options contracts. Free investments are available only for our retail individual clients.
 Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. 
 A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens.
 For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</h3>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Charges for Account Opening</h2>
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Type of Account</th>
              <th className="p-3 border">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Online Account</td>
              <td className="p-3 border text-green-600 font-semibold">Free</td>
            </tr>
            <tr>
              <td className="p-3 border">Offline Account</td>
              <td className="p-3 border text-green-600 font-semibold">Free</td>
            </tr>
            <tr>
              <td className="p-3 border">NRI Account (Offline only)</td>
              <td className="p-3 border font-semibold">₹500</td>
            </tr>
            <tr>
              <td className="p-3 border">Partnership, LLP, HUF, or Corporate Accounts (Offline only)</td>
              <td className="p-3 border font-semibold">₹500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Charges for Optional Value-Added Services</h2>
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Service</th>
              <th className="p-3 border">Billing Frequency</th>
              <th className="p-3 border">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Tickertape</td>
              <td className="p-3 border">Monthly / Annual</td>
              <td className="p-3 border">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td className="p-3 border">Smallcase</td>
              <td className="p-3 border">Per Transaction</td>
              <td className="p-3 border">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td className="p-3 border">Kite Connect</td>
              <td className="p-3 border">Monthly</td>
              <td className="p-3 border">Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
