import { useContext } from "react";
import { AppContext } from "../store/AppContext";
// import { AppContext1 } from "../App";

const GCCC = (props)=>{
    // 
    // const {name} = useContext(AppContext1);
    const data =useContext(AppContext)
    console.log(data , 'gcc state')
    return (
        <div>
            <h2>
               {'hello'}
            </h2>
        </div>
    )
}
export default GCCC;