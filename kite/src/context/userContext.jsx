import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showChartModal, setShowChartModal] = useState(false);
  const [showDepth, setShowDepth] = useState(false);
  

  return (
    <userContext.Provider value={{ showBuyModal, setShowBuyModal,showChartModal,setShowChartModal,showDepth,setShowDepth }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
