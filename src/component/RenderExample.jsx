import { useRef, useState } from "react";

const RenderExample = ()=> {
    let b = useRef(30); 
    let a = 60;
    console.log('b=>' ,b )
    const [headerText , setHeaderText] = useState('Hey this is rendering exmaple');
    const  [subHeaderText , setSubHeaderText]= useState('Hey this is sub header text!!!!');
    const handleClick =(type)=>{
        if(type == 'subheader') {
            setSubHeaderText('Hurrah Sub HEADFEER CHANGFED')
            // b.current=80;
            a= 100;
        } else {
            b.current=90;
            a= 200
            setHeaderText('Hurrah!!!! Changed Header Text')
        }
    }

    console.log('last  a=>' , a)
    console.log(' last  b=>' , b)
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



// count how many time function get call ()

// re-render(calling the function again) , render(first time calling the function)

// render => in this case all your state and all the variable related to the component is intial initialzed;

// re-render(if there  state  changed and  differnce found in diffing algorithm than re-render happen)
// in the case the of re-render state did not initialed it persist the earlier data or updated data
// in the case of re-render and render in this both cases normal variable always re-intialzed


//I have some rquirement from react that , i want create one varibale which will behave like below mentioned point

// This will initialzed only at the mounting time(element dom eneter  or render or fist func call);
// this will not re-initialzed at re-rendering
// it will persist the previous data like state but it should not cause for re-rendering the component




// ref ?? 
// every element have ref attribute 

// useRef 
// Persist the data without re-rendering (usePrevious)