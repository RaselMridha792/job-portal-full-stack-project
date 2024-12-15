import React, { createContext, useEffect, useState } from "react";
import auth from "../Components/firebase/firebase.init";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";


export const UserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return ()=>{
        unsubcribe();
    }
  }, []);

  const authInfo = {
    handleSignUp,
    handleSignIn,
    user,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
