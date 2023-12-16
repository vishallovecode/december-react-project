// Higher order component

import { useState } from "react"
import { Navigate } from "react-router-dom";



// Higher order component which takes the component as a params and return the new updated component

const isAuth = (Component)=> {
 return  (props) => {
    const [isAutheticated , setIsAuthenticated] = useState(localStorage.getItem('token'));
    return   isAutheticated  ?  <Component {...props}/> : <Navigate to = '/login'/>
  }
    
}


export default isAuth;






