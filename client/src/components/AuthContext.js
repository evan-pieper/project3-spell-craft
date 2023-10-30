import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (AuthService.loggedIn()) {
      setUser(AuthService.getProfile());
    }
  }, []);

  const login = (token) => {
    AuthService.login(token);
    setUser(AuthService.getProfile());
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
