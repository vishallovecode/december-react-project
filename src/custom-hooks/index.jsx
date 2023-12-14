import { useFetch } from "./useFetch";

const CustomHooksExample = () => {
        const [data , isLoading , message] = useFetch('https://jsonplaceholder.typicode.com/todos')
       
    return  (
        <div>
            <h2>This is custom hooks</h2>
        </div>
    )
}
export default CustomHooksExample;