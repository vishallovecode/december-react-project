import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isAuth from "../../component/isAuth";

const Cart = ()=> {
    const navigate = useNavigate();

    // the person who is logged in can only access this page

    // useEffect(()=>{
    //     if(!localStorage.getItem('token')) {
    //         navigate('/login')
    //     }
    // } , [])
    return  (
        <div>
            <h2>This is cart page</h2>
        </div>
    )
}

export default isAuth(Cart);



