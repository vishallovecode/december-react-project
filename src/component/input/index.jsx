import { useSearchParams } from "react-router-dom";
import "./input.css";
const Input = ({ onChange, value }) => {

  const[searchParams, setSearhcParams]= useSearchParams()
  
  const handleInput=(event)=>{
    setSearhcParams({q:event.target.value})
    onChange(event)
  }
  return <input value={value} className={"input"} onChange={handleInput} />;
};


export default Input;
