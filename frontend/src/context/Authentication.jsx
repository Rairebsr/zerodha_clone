import { createContext,useContext,useState,useEffect } from "react";


const Authentication = createContext();
export const AuthProvider = ({ children }) => {
    const [isVerified, setIsVerified] = useState(false);

  
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsVerified(true);
  };

  const logout = () => {
    setIsVerified(false);
    localStorage.removeItem('token');
  };

  return (
    <Authentication.Provider value={{isVerified, logout, login}}>
      {children}
    </Authentication.Provider>
  );
};

export const useAuth = () => useContext(Authentication);