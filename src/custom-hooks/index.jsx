import { useState } from "react";
import { useFetch, usePrevious } from "./useFetch";

const CustomHooksExample = () => {
        const [data , isLoading , message] = useFetch('https://jsonplaceholder.typicode.com/todos')

        const [searchText , setSearchText] = useState('')
        const previousValue =  usePrevious(searchText);
        console.log('data=>' , data , 'isLoading=>', isLoading , 'message=>' , message)

            const handlChange = (e)=> {
                setSearchText(e.target.value)
            } 
    return  (
        <div>
            <h2>This is custom hooks</h2>
            <input type= 'text' onChange={handlChange} placeholder="Type something to do magic.."/>
            <h2>{'Previous::'  + previousValue}</h2>
            <h2>{'Current::'  + searchText}</h2>
        </div>
    )
}
export default CustomHooksExample;