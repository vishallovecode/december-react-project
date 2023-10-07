import Button from "../button";
import Tag from "../tag";
import "./card.css";
const ProductCard = (props) => {
  const { thumbnail, title, price, discountPercentage } = props.product;
  return (
    <div className="product-card-cont">
      {discountPercentage && <Tag value={`${discountPercentage}%`} />}
      <div className="img-cover">
        <img className="image" src={thumbnail} alt="Product Image" />
      </div>
      <span className="title">{title}</span>
      <div className="footer">
        <span>{price}</span>
        <Button>Add</Button>
      </div>
    </div>
  );
};
export default ProductCard;
