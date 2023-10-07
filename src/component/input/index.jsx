import "./input.css";
const Input = ({ onChange, value }) => {
  return <input value={value} className={"input"} onChange={onChange} />;
};

export default Input;
