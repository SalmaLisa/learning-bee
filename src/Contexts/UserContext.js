import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const auth = getAuth(app)
  const [user, setUser] = useState('Sakil')
  

  const authInfo={user}
  return (
    <AuthContext.Provider value = {authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;