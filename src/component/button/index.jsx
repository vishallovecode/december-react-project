import "./button.css";

const Button = (props) => {
  const {
    buttonText,
    className,
    onClick,
    children,
    decrement,
    increment,

    quantity,
  } = props;
  if (!quantity) {
    return (
      <div onClick={increment}>
        <button className={`button ${className}`}>
          {buttonText || children}
        </button>
      </div>
    );
  } else {
    return (
      <div className="quant-button">
        <span onClick={decrement}>-</span>
        <span>{quantity}</span>
        <span onClick={increment}>+</span>
      </div>
    );
  }
};

export default Button;

// buttonText
// className
// onClick
