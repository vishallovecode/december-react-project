

import { Link } from 'react-router-dom';
import  './style.css'
const NotFound = ()=>{
    return  (
        <Link to ='/'className="not-found-image" >
               <img  src="/disney12.png" />
         
        </Link>
    )
}


export default NotFound;