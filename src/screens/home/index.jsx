import { useEffect, useState } from "react";
import ProductCard from "../../component/product-card";
import {
  GET_PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
} from "../../constant/restApiEndPoint";

import "./home.css";
import Input from "../../component/input";

const Home = () => {
  const [productList, setProductList] = useState({});
  const [search, setSearch] = useState("");

  const getProducts = async (url) => {
    try {
      const res = await fetch(url ? url : GET_PRODUCT_LIST);
      let productResponse = await res.json();

      setProductList(productResponse);
    } catch (error) {
      console.error("error::", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    const url = SEARCH_PRODUCT_LIST(event.target.value);
    getProducts(url);
  };

  return (
    <div>
      <Input value={search} placeHolder="search" onChange={handleChange} x />
      <div className="home">
        {productList?.products && Array.isArray(productList?.products)
          ? productList?.products.map((product) => {
              return <ProductCard product={product} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
