import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase";

// Actual data store for state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
