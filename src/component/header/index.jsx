import { useEffect, useState } from "react";
import Button from "../button";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { cartCount } = props;
  return (
    <NavLink    activeStyle={{
      fontWeight: "bold",
      color: "black"
    }} 
  
    to ='cart'className="header">
      <span className="logo">Vayu</span>
      <Button className="button-header">
        <img className="image1" src="/cart.jpeg" />
        <span className="count">{cartCount}</span>
        <span>My Cart</span>
      </Button>
    </NavLink>
  );
};

export default Header;


// link and navLink


// Link when you want to redirect to different page
// Navlink when you want to redirect into diffrenet page but you want to show some css think on that particular node