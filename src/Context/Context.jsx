import React, { createContext } from "react";

export const ContextData = createContext();
export const Context = ({ children }) => {
  return (
    <ContextData.Provider value={[]}>
      {children}
    </ContextData.Provider>
  );
};
