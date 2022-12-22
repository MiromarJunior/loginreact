import React, { createContext, useState } from "react";

export var Context = createContext({
  user: {},
  setUser: () => {},
});

export function AuthProvider({ children }) {
    
  const [user, setUser] = useState({
    logged: false,
  });

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;