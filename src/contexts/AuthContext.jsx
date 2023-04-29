import React, { createContext, useContext, useEffect, useState } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth"

const AuthContext = createContext();

export function useAuth() {
  return useContext( AuthContext );
}

export function AuthProvider({ children }) {

  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect( () => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged( auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Signup Function
  async function signup( email, password, username ) {
    const auth = getAuth();
    await createUserWithEmailAndPassword( auth, email, password );

    // Update Profile
    await updateProfile( auth.currentUser, {
      displayName : username
    });

    const user = auth.currentUser;

    setCurrentUser( {
      ...user
    } );

  }

  // Login Function
 function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout Function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout
  }

  return(
	<AuthContext.Provider value={value}>
		{!loading && children }
	</AuthContext.Provider>
  );

}
