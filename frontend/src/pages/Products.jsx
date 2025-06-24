import React from 'react'
import { assets } from '../assets/assets'
import { universeItems } from '../components/Features'

const Products = () => {
  return (
    <div>
      
        <div className='flex flex-col items-center justify-center text-center mb-10 px-4'>
          <h1 className='text-5xl text-gray-700 font-semibold mb-2 py-2'>Zerodha Products</h1>
          <p className='text-xl text-gray-500 mb-6'>
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className='text-lg text-gray-500 '>
            Check out our <a className='text-lg text-blue-600 hover:text-gray-500' href="/investment">investment offerings&rarr;</a>
          </p>
        </div>
        <hr />
        {/*kite block */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 mb-6 bg-white">
        
                
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                  <img src={assets.p_kite} alt="" className="w-full max-w-md object-contain" />
                </div>
        
                
                <div className="md:w-1/2 space-y-6 space-x-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold">Kite</h3>
                  <p className="text-gray-500">
                    Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                  </p>
                  <a href="/demo" className="inline-block text-blue-600 text-xl font-medium mb-4 hover:text-gray-600">
                    Try demo &rarr;
                  </a>
                  <a href="/learn" className="inline-block text-blue-600 text-xl font-medium mb-4  hover:text-gray-600">
                      Learn more &rarr;
                  </a>
                  
                  <div className="flex items-center gap-4 mt-5">
                    <img src={assets.google_badge} alt="Google Play" className="h-12 object-contain" />
                    <img src={assets.appstore_badge} alt="App Store" className="h-12 object-contain" />
                  </div>

                </div>
        </div>
        {/*conosle block */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold ">Console</h3>
            <p className="text-gray-500 text-lg">
              The central dashboard for your Zerodha account. Gain insights into your 
              trades and investments with in-depth reports and visualisations.
            </p>
            <a href="/learn-more" className="inline-block text-blue-600 text-xl font-medium hover:text-gray-600">
              Learn more &rarr;
            </a>
          </div>

          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src={assets.p_console} alt="Descriptive Alt Text" className="w-full max-w-md object-contain" />
          </div>
        </div>
        {/* coin block */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 mb-6 bg-white">
        
                
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                  <img src={assets.p_coin} alt="" className="w-full max-w-md object-contain" />
                </div>
        
                
                <div className="md:w-1/2 space-y-6 space-x-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold">Coin</h3>
                  <p className="text-gray-500">
                      Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.                  
                  </p>
                  <a href="/coin" className="inline-block text-blue-600 text-xl font-medium mb-4  hover:text-gray-600">
                      Coin &rarr;
                  </a>
                  
                  <div className="flex items-center gap-4 mt-5">
                    <img src={assets.google_badge} alt="Google Play" className="h-12 object-contain" />
                    <img src={assets.appstore_badge} alt="App Store" className="h-12 object-contain" />
                  </div>

                </div>
        </div>
        {/* kite connect block */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold ">Kite Connect API</h3>
            <p className="text-gray-500 text-lg">
              Build powerful trading platforms and experiences with our super simple 
              HTTP/JSON APIs. If you are a startup, build your investment app 
              and showcase it to our clientbase.
            </p>
            <a href="/learn-more" className="inline-block text-blue-600 text-xl font-medium hover:text-gray-600">
                Kite Connect&rarr;
            </a>
          </div>

          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src={assets.p_kite_c} alt="Descriptive Alt Text" className="w-full max-w-md object-contain" />
          </div>
        </div>
        {/* varsity block */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 mb-6 bg-white">
        
                
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                  <img src={assets.p_varsity} alt="" className="w-full max-w-md object-contain" />
                </div>
        
                
                <div className="md:w-1/2 space-y-6 space-x-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold">Varsity mobile</h3>
                  <p className="text-gray-500">
                    An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken 
                    down into bite-size cards to help you learn on the go.
                  </p>
                  <div className="flex items-center gap-4 mt-5">
                    <img src={assets.google_badge} alt="Google Play" className="h-12 object-contain" />
                    <img src={assets.appstore_badge} alt="App Store" className="h-12 object-contain" />
                  </div>

                </div>
        </div>
        <div className="flex justify-center px-4">
          <p className="text-2xl  text-gray-600 text-center mb-10">
            Want to know more about our technology stack? Check out the&nbsp;
            <a className="text-blue-600 hover:text-gray-500 font-medium" href="/zerodha">
              Zerodha.tech
            </a>
            &nbsp;blog
          </p>
        </div>

      <div className="bg-white px-6 md:px-20 py-16 text-center">
      <h2 className="text-3xl md:text-4xl  text-gray-600 mb-10">
        The Zerodha Universe
      </h2>
      <p className='flex justify-center item-center text-center text-m mb-20'>Extend your trading and investment experience even further with our partner platforms</p>

      <div className="flex flex-wrap justify-center gap-10">
        {universeItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="w-40 flex flex-col items-center text-center hover:shadow-md p-4 rounded-lg transition"
          >
            <img
              src={item.image}
              alt=""
              className="w-80 object-contain mb-4"
            />
            <p className="text-sm text-gray-500">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>



      
    </div>
  )
}

export default Products
