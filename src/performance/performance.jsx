import { useCallback, useMemo, useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";
import Button from "../component/button";

const Performance = ()=> {
    const [pHeading , setPHeading] = useState('Performance discussion')
    const [child1 , setChild1] = useState('Child1')
    const [child2 , setChild2] = useState('Child2')
    const [child3 , setChild3] = useState('Child3')

    const a = {a:20};
    // in react all object , (array) and functions get new reference everytime you re-render the component  
    const handlChild1 = ()=> {
        setChild1('Updated Child1');
    }


    // instances 
    const A = useMemo(()=>{
        return a;
    }, [])

    const calcFunction = (value)=> {
        // it is doing big calculation
        console.log('function calculation')
        for(let i=0;i<=10000;i++) {
            if(i===10000) {
                return i + value;
            }
        }

    }
    // function memoized the return value of the function
    const funcValue  = useMemo(()=>{
        return calcFunction(child3);
    } ,[child3])



    

   const func =  useCallback(()=>{
           handlChild1()
           // this code will be run only once after mounting
           // here you can pass any dependency 
           // whenever that dependency change this function will recreated and reference will change
    } , [child3]) // here we can pass array of dependency

        console.log('Parent')
    return (
        <>
       <h2>{pHeading}</h2>
       <button onClick = {()=>setPHeading('Updated The heading')}>Change</button>
       {/* <button onClick = {()=>setChild1('Updated Child1')}>Change child2</button>
       */}
       <button onClick = {()=>setChild2('Updated Child12')}>Change child2</button>
       <button onClick = {()=>setChild3('Updated Child13')}>Change child3</button> 
       <Child1 heading = {child1} onClick = {func}/>
       <Child2 heading = {child2} funcValue = {funcValue}/>
       <Child3 heading = {child3} a = {A}/>
     </>
    )
}

export default Performance;

// useCallback returns the meoized functions
// useMemo returns the meoized value
// everytime component re-render function , object and array variable will get new reference c if we are passing these
// as props in child component everytime child component will get new reference , so props will change on every parent render
// so react memo will not work here 
// Use memo will return the memoized value or will memozed the function return value