import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    
    const {activeUser,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <Loading/>
    }
    
    if(!activeUser){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children ;
};

export default PrivateRouter;