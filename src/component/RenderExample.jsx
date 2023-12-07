import { useState } from "react";

const RenderExample = ()=> {
    let b=30;
    console.log('Hey I am rende111' ,b )
    const [headerText , setHeaderText] = useState('Hey this is rendering exmaple');
    const  [subHeaderText , setSubHeaderText]= useState('Hey this is sub header text!!!!');
    const handleClick =(type)=>{
        if(type == 'subheader') {
            setSubHeaderText('Hurrah Sub HEADFEER CHANGFED')
            b=80;
        } else {
            b=90;
            setHeaderText('Hurrah!!!! Changed Header Text')
        }
    }

    console.log('Hey I am render2xs' , b)
    return  (
        <div>
          <h2>{headerText}</h2> 
          <h2>{subHeaderText}</h2>
          <button onClick={()=>handleClick('header')}>
            ChangeHeader
          </button>
          <button onClick={()=>handleClick('subheader')}>
            Sub Header Text Change
          </button>
        </div>
    )
}

export default RenderExample;   



// re-render(calling the function again) , render(first time calling the function)

// render => in this case all your state and all the variable related to the component is intial initialzed;

// re-render(if there  state  changed and  differnce found in diffing algorithm than re-render happen)
// in the case the of re-render state did not initialed it persist the earlier data or updated data
// in the case of re-render and render in this both cases normal variable always re-intialzed


