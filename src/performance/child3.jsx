import { memo } from "react";

const Child3 = (props)=>{
        console.log('Child3' , props.A)
    return  (
        <h1>{props.heading}</h1>
    )
}


export default memo(Child3);

// class  => Pure Component