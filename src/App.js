import { Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<Home />} />
          <Route path=  'details/:productId' element = {<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
