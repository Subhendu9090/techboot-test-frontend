import { createContext, useContext } from 'react';

interface AuthData {
  userEmail: string | null ;
  token: string | null;
  isAuthenticated: boolean;
  login: (userEmail: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthData | null>(null);;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
