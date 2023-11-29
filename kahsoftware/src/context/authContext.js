import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../baseUrl";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/`, inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BASE_URL}/auth/logout`);
        localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);


  const allCookies = document.cookie;

  function cookieValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(allCookies);
    const cookieArray = decodedCookie.split(';');
  
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  const token = cookieValue("access_token")

  return (
    <AuthContext.Provider value={{ currentUser, login, logout,token }}>
      {children}
    </AuthContext.Provider>
  );
};