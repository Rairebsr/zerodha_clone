import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <userContext.Provider value={{ showBuyModal, setShowBuyModal }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
