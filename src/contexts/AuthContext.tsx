import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./Store";

type AuthProviderProps = {
  children: ReactNode; // Type for children
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authData, setAuthData] = useState<{userEmail:string  | null,token:string | null}>({
    userEmail: "",
    token: "",
  });

  const login = (userEmail:string | null, token:string | null) => {
    setAuthData({ userEmail, token });
    localStorage.setItem('authToken',JSON.stringify (token));
    localStorage.setItem('authUser', JSON.stringify(userEmail));
  };

  const logout = () => {
    setAuthData({ userEmail: null, token: null });
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUserEmail = localStorage.getItem('authUser');
    if (savedToken && savedUserEmail) {
      try {
        const parsedToken = JSON.parse(savedToken);
        const parsedUserEmail = JSON.parse(savedUserEmail);
        setAuthData({
          userEmail: parsedUserEmail,
          token: parsedToken,
        });
      } catch (error) {
        console.error('Error parsing stored auth data');
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      }
    }
  }, []);

  const value = {
    userEmail: authData.userEmail,
    token: authData.token,
    isAuthenticated: !!authData.token, 
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
  
};
