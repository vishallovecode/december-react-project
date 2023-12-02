import { useContext } from "react";
import { AppContext } from "../App";

const GCCC = (props)=>{
    // 
    const {name} = useContext(AppContext);

    return (
        <div>
            <h2>
               {name}
            </h2>
        </div>
    )
}


export default GCCC;