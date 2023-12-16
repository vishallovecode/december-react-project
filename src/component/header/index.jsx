import { useEffect, useState } from "react";
import Button from "../button";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const { cartCount } = props;
  const [logintext , setLoginText] = useState('Login')
  const logout = ()=> {
    if(localStorage.getItem('token')) {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      setLoginText('Login')
    }
   else {
    navigate('/login')
   }
    
  }

  useEffect(()=>{
      const token = localStorage.getItem('token');
      setLoginText(token ? 'Logout': 'Login')
  } , [])


  return (
    <div className="header">

      <span className="logo">Vayu</span>
      <span className="logout" onClick={logout}>{logintext}</span>
      <NavLink    
      to ='cart'>
      <Button className="button-header">
        <img className="image1" src="/cart.jpeg" />
        <span className="count">{cartCount}</span>
        <span>My Cart</span>
      </Button>

    </NavLink>
    </div>
  );
};

export default Header;


// link and navLink


// Link when you want to redirect to different page
// Navlink when you want to redirect into diffrenet page but you want to show some css think on that particular node