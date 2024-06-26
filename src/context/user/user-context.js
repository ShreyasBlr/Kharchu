"use client";

import { useContext, createContext } from "react";

export const UserContext = createContext({});

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return context;
};
