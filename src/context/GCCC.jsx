import { useContext } from "react";
import { AppContext1 } from "../App";

const GCCC = (props)=>{
    // 
    const {name} = useContext(AppContext1);
    return (
        <div>
            <h2>
               {name}
            </h2>
        </div>
    )
}
export default GCCC;