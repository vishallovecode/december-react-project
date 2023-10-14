import { useEffect, useState } from "react";
import Button from "../button";
import "./header.css";

const Header = (props) => {
  const { cartCount } = props;
  return (
    <div className="header">
      <span className="logo">Vayu</span>
      <Button className="button-header">
        <img className="image1" src="/cart.jpeg" />
        <span className="count">{cartCount}</span>
        <span>My Cart</span>
      </Button>
    </div>
  );
};

export default Header;
