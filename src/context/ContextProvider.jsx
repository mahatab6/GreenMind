import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () =>{
        return signInWithPopup(auth, provider);
    }


    const userInfo = {
        register,
        login,
        GoogleLogin
    }


    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default ContextProvider;