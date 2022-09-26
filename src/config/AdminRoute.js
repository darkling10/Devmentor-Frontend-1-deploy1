import React from 'react'
import { useAuthState } from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

function AdminRoute({children}) {
    const user = useAuthState()
    if(user.user.userType!=="admin"){
        return <Navigate to="/" ></Navigate>
    }
   
    return children;
}

export default AdminRoute