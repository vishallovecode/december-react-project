import { useEffect, useState } from "react";
import ProductCard from "../../component/product-card";
import {
  GET_PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
} from "../../constant/restApiEndPoint";

import "./home.css";
import Input from "../../component/input";
import { debounce } from "../../utils";
import Loader from "../../component/loader";
import EmptyScreen from "../../component/empty-screen";

const Home = () => {
  const [productList, setProductList] = useState({});
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState("");

  const getProducts = async (url) => {
    setLoader(true);
    try {
      const res = await fetch(url ? url : GET_PRODUCT_LIST);
      let productResponse = await res.json();

      setProductList(productResponse);
    } catch (error) {
      console.error("error::", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    const url = event.target.value
      ? SEARCH_PRODUCT_LIST(event.target.value)
      : "";
    getProducts(url);
  };

  const debounceChange = debounce(handleChange, 500);

  return (
    <div>
      <Input placeHolder="search" onChange={debounceChange} />

      <div className="home">
        {!loader &&
        productList?.products &&
        productList?.products.length >= 1 &&
        Array.isArray(productList?.products) ? (
          productList?.products.map((product) => {
            return <ProductCard product={product} />;
          })
        ) : loader ? (
          <Loader />
        ) : (
          <EmptyScreen
            className="empty"
            title={"No Products Found"}
            description={
              "Your Search did not match any Products, Please Try again"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;
