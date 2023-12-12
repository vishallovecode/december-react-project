import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";
import Button from "../component/button";

const Performance = ()=> {
    const [pHeading , setPHeading] = useState('Performance discussion')
    const [child1 , setChild1] = useState('Child1')
    const [child2 , setChild2] = useState('Child2')
    const [child3 , setChild3] = useState('Child3')
    console.log('Parent')
    return (
        <>
       <h2>{pHeading}</h2>
       <button onClick = {()=>setPHeading('Updated The heading')}>Change</button>
       <button onClick = {()=>setChild1('Updated Child1')}>Change child2</button>
       <button onClick = {()=>setChild2('Updated Child12')}>Change child2</button>
       <button onClick = {()=>setChild3('Updated Child13')}>Change child3</button>
       <Child1 heading = {child1}/>
       <Child2 heading = {child2}/>
       <Child3 heading = {child3}/>
     </>
    )
}


export default Performance;