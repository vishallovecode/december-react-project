import { memo } from "react";

const Child2 = (props)=>{
    console.log('Child2')
    return  (
        <h1>{props.heading}</h1>
    )
}


export default memo (Child2);