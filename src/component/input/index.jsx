import { useSearchParams } from "react-router-dom";
import "./input.css";
import { forwardRef } from "react";


// forward ref will return the updated component so Input2 will be component
const Input =forwardRef((props, ref)=>{
  const  { onChange, value  , key  , classes} = props
  console.log('child ref' , ref  , 'props=>' , props)

  const[searchParams, setSearhcParams]= useSearchParams()
  
  const handleInput=(event)=>{
    setSearhcParams({q:event.target.value})
    onChange(event)
  }
  return <input ref = {ref} value={value} className={"input"} onChange={handleInput}  {...props}/>;
})

// const Input = (props , ref) => {
//   const  { onChange, value , ref , key } = props
//   console.log('child ref' , ref , key , 'props=>' , props)
//   const[searchParams, setSearhcParams]= useSearchParams()
  
//   const handleInput=(event)=>{
//     setSearhcParams({q:event.target.value})
//     onChange(event)
//   }
//   return <input ref = {ref} value={value} className={"input"} onChange={handleInput} />;

// };


export default Input;



// higher order component  


// the component which accept the component as params and return the new updated component


// forwardRef is higher order component provided by the react , it is helpful to send the ref created in parent to the child 
// as we know we cannot send the reference as props in react component
// it return the component with updated things



forwardRef(Input)