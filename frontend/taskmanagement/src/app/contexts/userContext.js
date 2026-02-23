"use client";

import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

  const [userDetail, setUserdetail] = useState({
    fullName: "",
    emailId: "",
    password: "",
    role: ""
  });

  console.log("user detail : ",userDetail)
//   function handleLoginData(data){
    
//   }

  return (
    <UserContext.Provider
      value={{
        userDetail,
        setUserdetail
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
