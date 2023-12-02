import { Route, Routes } from "react-router-dom";
import {Switch } from "react-router";
import "./App.css";
import Header from "./component/header";
import ProductCard from "./component/product-card";
import Home from "./screens/home";
import ProductDetails from "./screens/product-detail";
import NotFound from "./component/not-found";
import WithoutContext from "./withoutcontext";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path=  'details/:productId' element = {<ProductDetails/>}/>
          <Route path=  'details/new' element = {<div>Hey new</div>}/>
          <Route path='*' element={<NotFound/>}/>

          <Route path= 'withoutcontext' element = {<WithoutContext/>}> </Route>

          {/* Parent route */}
          <Route path ='account' element = {<div>Hello chill maro</div>}> 
          <Route path = 'opt1' element= {<div>Hello opt1</div>}></Route>
          <Route path = 'opt2'  element= {<div>Hello opt2</div>}></Route>
          <Route path = 'opt3' element= {<div>Hello opt3</div>}></Route>
          
          </Route>
         
         {/* 
          <Route path = 'account/opt1' element= {<div>Hello opt1</div>}></Route>
          <Route path = 'account/opt2'  element= {<div>Hello opt2</div>}></Route>
          <Route path = 'account/opt3' element= {<div>Hello opt3</div>}></Route> 
          */}
         
        </Routes>
    </div>
  );
}

export default App;




// outlet


// switch(type) {
//   case 1: 
//   return 1
// }