import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [activeUser, setAtiveUser] = useState (null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const GoogleLogin = () =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const profile = (userProfile) => {
        return updateProfile(auth.currentUser, userProfile);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth,(currentUser) =>{
            setAtiveUser(currentUser);
            setLoading(false);
        });
        return (()=>{
            unsubscribe();
        })
    },[])
    

    const userInfo = {
        register,
        login,
        GoogleLogin,
        activeUser,
        logOut,
        loading,
        profile
    }


    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default ContextProvider;