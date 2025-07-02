
import React from 'react'

const Layout = ({ children }) => (
  <>
    <div className="flex">
      <div className="flex-1 h-[calc(100vh-56px)] overflow-y-auto bg-gray-100">
        {children}
      </div>
    </div>
  </>
  
);
export default Layout