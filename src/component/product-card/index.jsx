import { Link, useNavigate } from "react-router-dom";
import Button from "../button";
import Tag from "../tag";
import "./card.css";
import { useState } from "react";
const ProductCard = (props) => {
   const navigate = useNavigate();
  const { thumbnail, title, price, discountPercentage, id, quantity } =
    props.product;
  const { increment, decrement, product } = props;

  const cardClick = (event)=>{
    navigate(`/details/${product.id}`)
  }

  return (
    <div onClick={cardClick}  className="product-card-cont">
      {discountPercentage && <Tag value={`${discountPercentage}%`} />}
      <div className="img-cover">
        <img className="image" src={thumbnail} alt="Product Image" />
      </div>
      <span className="title">{title}</span>
      <div className="footer">
        <span>$ {price}</span>
        <Button
          increment={(event) => increment(event,id)}
          decrement={(event) => decrement(event,product)}
          buttonText="Add"
          quantity={quantity}
        />
      </div>
    </div>
  );
};
export default ProductCard;



// dynamic routes(done)
// if any routes does not we want to show differenet ui
// Switch
// nested routes
// useParams(done)
// location 
// history
// link(done)
// navLink
// useLocation
// outlet
// navigate(done)
// redirect
// useMemo
// useCallback 
// useRef
// forwardRef
// context api (1 week)
// useReducer
// custom hooks
// React authentication 
// redirection 
// Private route
