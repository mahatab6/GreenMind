import React from 'react';
import { AuthContext } from './AuthContext';

const ContextProvider = ({children}) => {



    const userInfo = {
        "email" : "mahatab@gmail.com"
    }


    return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default ContextProvider;