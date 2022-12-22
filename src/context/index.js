import React, { createContext, useState } from "react";

export var Context = createContext({
  user: {},
  setUser: () => {},
});

export function AuthProvider({ children }) {
    
  const [user, setUserHook] = useState({
    logged: false,
  });

  return (
    <Context.Provider
      value={{
        user,
        setUserHook,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;