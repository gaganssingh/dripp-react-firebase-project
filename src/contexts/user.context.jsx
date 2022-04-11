import { createContext, useState } from "react";

// Actual data store for state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
