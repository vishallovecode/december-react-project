import { useEffect, useState } from "react";
import ProductCard from "../../component/product-card";
import { GET_PRODUCT_LIST } from "../../constant/restApiEndPoint";

import "./home.css";

const Home = () => {
  const [productList, setProductList] = useState({});

  const getProducts = async () => {
    try {
      const res = await fetch(GET_PRODUCT_LIST);
      let productResponse = await res.json();

      setProductList(productResponse);
    } catch (error) {
      console.error("error::", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // cmd+click // mac
  // /ctrl +click

  return (
    <div className="home">
      {productList?.products && Array.isArray(productList?.products)
        ? productList?.products.map((product) => {
            return <ProductCard product={product} />;
          })
        : null}
    </div>
  );
};

export default Home;
