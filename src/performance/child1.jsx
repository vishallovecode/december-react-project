import { memo } from "react";

const Child1 = (props)=>{
    const  {onClick ,heading} = props;
    console.log('Child1')
    return  (
        <>
        <h1>{heading}</h1>
        <button onClick = {()=>onClick('Updated Child1')}>Change child2</button>
        </>

    )
}


export default memo(Child1) ;


// React memo will not re-render the child component or component if the props are same