import { useLocation, useParams } from "react-router-dom";
import "./style.css";
import { GET_PRODUCT_LIST } from "../../constant/restApiEndPoint";
import { useEffect, useState } from "react";
const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const { productId } = useParams();
  const location =  useLocation();
  console.log('location', location)

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    const res = await fetch(`${GET_PRODUCT_LIST}/${productId}`);
    const resJson = await res.json();
    setProductDetails(resJson);
  };

  
  return (
    <div className="product-details">
      <h2>{productDetails.title}</h2>
      <img src={productDetails.thumbnail} />
      <p>{productDetails.description}</p>
      <span>{productDetails.price}</span>
      <span>{productDetails.discountPercentage}</span>
      <span>{productDetails.brand}</span>
    </div>
  );
};
export default ProductDetails;
