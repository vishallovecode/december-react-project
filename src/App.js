import { Route, Routes } from "react-router-dom";
import {Switch } from "react-router";
import "./App.css";
import Header from "./component/header";
import ProductCard from "./component/product-card";
import Home from "./screens/home";
import ProductDetails from "./screens/product-detail";
import NotFound from "./component/not-found";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path=  'details/:productId' element = {<ProductDetails/>}/>
          <Route path=  'details/new' element = {<div>Hey new</div>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
