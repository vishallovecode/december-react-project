import { Link, redirect, useNavigate } from "react-router-dom";
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
  

  // inside the component at the time mounting on the basis of some condition if that condition match you want to stay in the same page else you want to go in
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
// if any routes does not we want to show differenet ui(done)
// useParams(done)
// useSearchParams(done)
// Switch(depreceated)
// routes(done)
// nested routes
// location (done)
// history
// link(done)
// navLink
// useLocation(done)
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
// Portal




// useHistory 


// nestedRoutes

// outlet (this is interesting because this is newly introduced feature in react-router-dom)