import Button from "../button";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <span className="logo">Vayu</span>
      <Button className="button-header">
        <img className="image1" src="/cart.jpeg" />
        <span>My Cart</span>
      </Button>
    </div>
  );
};

export default Header;
