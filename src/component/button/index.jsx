import "./button.css";

const Button = (props) => {
  const { buttonText, className, onClick, children } = props;
  return (
    <div>
      <button className={`button ${className}`}>
        {buttonText || children}
      </button>
    </div>
  );
};

export default Button;

// buttonText
// className
// onClick
