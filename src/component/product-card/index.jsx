import Button from "../button";
import Tag from "../tag";
import "./card.css";
const ProductCard = (props) => {
  const { thumbnail, title, price, discountPercentage, id, quantity } =
    props.product;
  const { increment, decrement, product } = props;

  return (
    <div className="product-card-cont">
      {discountPercentage && <Tag value={`${discountPercentage}%`} />}
      <div className="img-cover">
        <img className="image" src={thumbnail} alt="Product Image" />
      </div>
      <span className="title">{title}</span>
      <div className="footer">
        <span>$ {price}</span>
        <Button
          increment={() => increment(id)}
          decrement={() => decrement(product)}
          buttonText="Add"
          quantity={quantity}
        />
      </div>
    </div>
  );
};
export default ProductCard;
