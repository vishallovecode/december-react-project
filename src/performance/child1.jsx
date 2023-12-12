import { memo } from "react";

const Child1 = (props)=>{
    console.log('Child1')
    return  (
        <h1>{props.heading}</h1>
    )
}


export default memo(Child1) ;


// React memo will not re-render the child component or component if the props are same