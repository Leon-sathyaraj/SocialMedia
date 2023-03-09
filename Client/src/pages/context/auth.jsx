import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  useEffect(() => {
    async function fetchUserData() {
      if (currentUser && currentUser.id) {
        try {
          const res = await makeRequest.get(`/users/find/${currentUser.id}`);
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("User not logged in");
      }
    }
    fetchUserData();
  }, [currentUser]);

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  useEffect(() => { // this will help users to stay login even if they close or refresh browser
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};