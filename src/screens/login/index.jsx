import { useEffect, useState } from "react";
import Button from "../../component/button";
import Input from "../../component/input"
import { useFetch } from "../../custom-hooks/useFetch";
import  './login.css'
import { json, useNavigate } from "react-router-dom";

const Login  = ()=> {

    const navigate = useNavigate();

const [userInfo , setUserInfo] = useState({username: '' , password: ''})

const handleChange = (e)=> {
setUserInfo({...userInfo, [e.target.name]: e.target.value})
}

useEffect(()=>{
    const jwtToken =  localStorage.getItem('token');
    if(jwtToken) {
        navigate('/')
    }
} , [])

const postLogin = async()=> {
    try {
        const data = await  fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
          })
          if(data.ok) {
                const jsonData = await data.json();
               localStorage.setItem('token' , jsonData.token)
               delete jsonData['token']
               localStorage.setItem('userInfo' , JSON.stringify(jsonData))
               navigate('/')

          }

    }
 catch (error) {
console.log(error)
 }
    
}
    return  (
        <div className="login">
        <Input name= 'username'  placeholder = {'Enter User Name'} onChange = {handleChange}/>
        <Input  name = 'password' placeholder = 'Enter Password'   onChange = {handleChange} type= 'password'/>
        <button onClick={postLogin}>Login</button>
        </div>
    )
}
export default  Login;