import { useEffect, useState } from "react";
import ProductCard from "../../component/product-card";
import {
  GET_CATEGORY_LIST,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_LIST,
  SEARCH_PRODUCT_LIST,
} from "../../constant/restApiEndPoint";

import "./home.css";
import Input from "../../component/input";
import { debounce } from "../../utils";
import Loader from "../../component/loader";
import EmptyScreen from "../../component/empty-screen";
import DropDown from "../../component/dropdown";

const Home = () => {
  const [productList, setProductList] = useState({});
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState("");

  const [categories, setCategoryList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const getProductsByCategory = async (categoryName) => {
    setLoader(true);
    try {
      const res = await fetch(GET_PRODUCT_BY_CATEGORY(categoryName));
      const products = await res.json();
      setProductList(products);
    } catch (error) {
      console.error("error::", error);
    } finally {
      setLoader(false);
    }
  };

  // calling product by category using useEffect

  // directly calling on the value change

  const dropdownChange = (event) => {
    console.log(event.target.value, "hey checker");
    setSelectedCategory(event.target.value);
    getProductsByCategory(event.target.value);
  };

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

  const callback = () => {
    getProducts();
    getCategory();
  };

  useEffect(callback, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    const url = event.target.value
      ? SEARCH_PRODUCT_LIST(event.target.value)
      : "";

    // https://dummyjson.com/products/search?q=visha
    // ''
    getProducts(url);
  };

  const debounceChange = debounce(handleChange, 500);

  const getCategory = async () => {
    const res = await fetch(GET_CATEGORY_LIST);
    const categoryList = await res.json();
    const updatedCategoryList = categoryList?.map((category) => {
      return {
        id: category,
        label: category,
      };
    });
    console.log(updatedCategoryList, "updatedCategoryList");
    setCategoryList(updatedCategoryList);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          left: "10%",
          width: "100%",
          position: "relative",
        }}
      >
        <Input placeHolder="search" onChange={debounceChange} />
        <DropDown
          value={selectedCategory}
          handleChange={dropdownChange}
          options={categories} // array of object  [{}, {} ,{}]
          placeHolder="Select Category"
          labelKey={"label"}
          idKey={"id"}
        />
      </div>

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

// [
//   "smartphones",
//   "laptops",
//   "fragrances",
//   "skincare",
//   "groceries",
//   "home-decoration",
//   "furniture",
//   "tops",
//   "womens-dresses",
//   "womens-shoes",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "womens-watches",
//   "womens-bags",
//   "womens-jewellery",
//   "sunglasses",
//   "automotive",
//   "motorcycle",
//   "lighting"
// ]
