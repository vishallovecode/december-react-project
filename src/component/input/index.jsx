import { useSearchParams } from "react-router-dom";
import "./input.css";
const Input = ({ onChange, value }) => {

  const[searchParams, setSearhcParams]= useSearchParams()

  const handleInput=(event)=>{

    console.log(searchParams.get('q'))
    setSearhcParams({q:event.target.value})
    onChange(event)
  }
  return <input value={value} className={"input"} onChange={handleInput} />;
};


export default Input;
