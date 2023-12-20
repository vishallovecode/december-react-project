import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute =(props)=>{
    const [isAutheticated , setIsAuthenticated] = useState(localStorage.getItem('token'));
    if(isAutheticated) {
        return props.children
    } else {
       return <Navigate to = '/login'/>
    }
}


export default ProtectedRoute;