import React from 'react'
import { useAuthState } from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

function AppRoute({children}) {
    const {token} = useAuthState();
    console.log(token)
    if(!Boolean(token)){
       return <Navigate  to={'/'}></Navigate>
    }
    return children;
}

export default AppRoute