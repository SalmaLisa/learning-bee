import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const auth = getAuth(app)
  const [user, setUser] = useState('')
  
  //create user
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
 }
//update userInfo
  const updateUserInfo = (name,photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    })
  }

  //handle login
  const handleLogin = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password) 
  }

  //log out
  const logOut = () => {
    return signOut(auth)
  }
  
  //google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  //github sign in
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider)
  }

  //add user monitor
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
    
  },[])
  const authInfo={user,createUser,updateUserInfo,handleLogin,logOut,googleSignIn ,gitHubSignIn}
  return (
    <AuthContext.Provider value = {authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;