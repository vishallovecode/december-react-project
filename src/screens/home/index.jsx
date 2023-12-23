import React, { Suspense, useContext, useEffect, useRef, useState } from "react";
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
// import DropDown from "../../component/dropdown";
import Header from "../../component/header";
import { redirect, useLocation, useParams, useSearchParams ,Redirect } from "react-router-dom";
import { AppContext } from "../../store/AppContext";
import { FETCH_PRODUCT, PRODUCT_FETCHED_FAILED, PRODUCT_FETCHED_SUCCESS } from "../../store/reducer";


const DropDown = React.lazy(()=>import("../../component/dropdown"))

const Home = () => {

  // reference for input 
  const inputRef = useRef(null);

  const {dispatch ,state} = useContext(AppContext)
   console.log('state' , state)
   const [productList , setProductList] = useState(state.productList)

  // const history  =  useHistory()

  useEffect(()=>{
    setProductList(state.productList)
  }, [state])
 
  
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState("");
  const  [isRedirect , setRedirect] = useState(true)

  const [cartCount, setCartCount] = useState(0);

  const [categories, setCategoryList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");


  const location =  useLocation();
  const params = useParams();
  console.log('location', location ,params )



  const focusInputBox = ()=> {
    inputRef.current.focus();
  }

  useEffect(()=>{
    focusInputBox()
  },[])


  const[searchParams, setSearhcParams]= useSearchParams();

  const getProductsByCategory = async (categoryName) => {
    setLoader(true);
    try {
      const res = await fetch(GET_PRODUCT_BY_CATEGORY(categoryName));
      const products = await res.json();
      dispatch({type: PRODUCT_FETCHED_SUCCESS , payload: products})
      // setProductList(products);
    } catch (error) {
      console.error("error::", error);
    } finally {
      setLoader(false);
    }
  };


  useEffect(()=>{
    //   console.log('cool',new URLSearchParams(location.search).get('q'))
    //  const data = new URLSearchParams(location.search).get('q');
         const data = searchParams.get('q');
      setSearch(data);
      const url = data
        ? SEARCH_PRODUCT_LIST(data)
        : "";
  
      // https://dummyjson.com/products/search?q=visha
      // ''
      getProducts(url);
  } , [searchParams])

  // calling product by category using useEffect
  // update state

  // increment function is getting id of the card which was clicked
  // We are using map functions to  iterate  through every products inside the productList object
  // map function return  a array , with value which is return by the callback function of map functions
  // while traversing if we find any product equal to the id we will increment the count of that product by one

  const increment = (event,id) => {
    event.stopPropagation();
    const updatedProductList = { ...productList }; // this deep copy of the parent label object
    setCartCount(cartCount + 1);

    localStorage.setItem("cartCount", cartCount + 1);
    const products = productList.products?.map((product) => {
      if (product.id === id) {
        // return {
        //   ...product,
        //   quantity: product.quantity ? product.quantity + 1 : 1,
        // };
        product.quantity = product.quantity ? product.quantity + 1 : 1;
        return product;
      } else {
        return product;
      }
    });
    updatedProductList.products = products;
    // setProductList(updatedProductList);
    dispatch({type: PRODUCT_FETCHED_SUCCESS , payload: updatedProductList})

  };

  const decrement = (event,productObj) => {
    event.stopPropagation()
    if (productObj.quantity >= 1) {
      setCartCount(cartCount - 1);
      localStorage.setItem("cartCount", cartCount - 1);
      const updatedProductList = { ...productList }; // this deep copy of the parent label object
      const products = productList.products?.map((product) => {
        if (product.id === productObj.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
          // product.quantity = product.quantity - 1;
          // return product;
        } else {
          return product;
        }
      });
      updatedProductList.products = products;
      dispatch({type: PRODUCT_FETCHED_SUCCESS , payload: updatedProductList})
      // setProductList(updatedProductList);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      getProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);



  // directly calling on the value change

  const dropdownChange = (event) => {
    console.log(event.target.value, "hey checker");
    if (!event.target.value) {
      getProducts("");
    }
    setSelectedCategory(event.target.value);
    // getProductsByCategory(event.target.value);
  };

  // function declration
  const getProducts = async (url) => {
    setLoader(true);
    dispatch({type: FETCH_PRODUCT , payload: ''})
    try {
      const URL = url ? url : GET_PRODUCT_LIST;
      const res = await fetch(URL);
      let productResponse = await res.json();

      // setProductList(productResponse);
      dispatch({type: PRODUCT_FETCHED_SUCCESS , payload: productResponse})
    } catch (error) {
      console.error("error::", error);
      dispatch({type: PRODUCT_FETCHED_FAILED , payload: error})
    } finally {
      setLoader(false);
    }
  };

  const callback = () => {
    getProducts(); // THIS IS CALLED ONCE AND CALLED AFTER THE MOUNTING
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

  const debounceChange = debounce(handleChange, 100); // async
  const getCategory = async () => {
    const res = await fetch(GET_CATEGORY_LIST);
    const categoryList = await res.json(); // this is array of string
    const updatedCategoryList = categoryList?.map((category) => {
      return {
        categoryName: category,
      };
    });
    console.log(updatedCategoryList, "updatedCategoryList", categoryList);
    setCategoryList(updatedCategoryList);
  };


  // if(isRedirect) {
  //   console.log(redirect('/login'))
  //   return Redirect('/login')
  // }

  return (
    <>
      <Header cartCount={cartCount} />
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
            width: "80%",
            position: "relative",
          }}
        >
          
          <Input ref  = {inputRef} value = {search} placeHolder="search" onChange={debounceChange} />
          <Suspense fallback= {<div>Loading...</div>}> 
          <DropDown
            value={selectedCategory}
            handleChange={dropdownChange}
            options={categories} // array of object  [{}, {} ,{}]
            placeHolder="Select Category"
            labelKey={"categoryName"}
            idKey={"categoryName"}
          />
          </Suspense>
        </div>
        <div className="home">
          {!loader &&
          productList?.products &&
          productList?.products.length >= 1 &&
          Array.isArray(productList?.products) ? (
            productList?.products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  increment={increment}
                  decrement={decrement}
                  quantity={count}
                />
              );
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
    </>
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
// // ]
//  const a ={
//   name: 'vishal'
//  }
//  a.name ='sharma'


// // all the web browser url work on the top of stack => LIFO
// {
//   title: "CopyAttributeDemand",
//   control: "Boolean",
//   label: "Attribute Demand",
//   flag: "copyEnable",
//   defaultValue: false,
//   description: "*Copy the attributes demand to the next years."
// },
// {
//   title: "EnableAttributeDemand",
//   control: "Boolean",
//   label: "Attribute Demand",
//   flag: "copyEnable",
//   defaultValue: false,
//   description: "*Enable the Attributes Demand."
// },



const data = {
id: 'attributeMethod',
label: 'Attribute Method',
headingStart: true,
children : [
  { id: "EnableAttributeDemand",control: "Boolean",defaultValue: false,description: "*Enable the Attributes Demand."} ,
  {title: "CopyAttributeDemand",control: "Boolean",defaultValue: false,description: "*Copy the attributes demand to the next years."
}, ]
}



// const [form , setForm]= useState({
//   EnableAttributeDemand: false,
//   CopyAttributeDemand: false
// })

// const handlChange = (e)=> {
//  const  updatedFrom  = {...form};
//  updatedFrom[e.target.name] = e.target.value;
//  setForm(updatedFrom)

// }

// if(data.children) {
//   <div style  = {{display: 'flex'}}>
//       {
//         data.children.map((object)=>{
//           <Tooltip value = {object.description}>
//             <CheckBox object = {object}handleChange = {handlChange}/>
//             </Tooltip>
//         })
//       }
//   </div>
// }


// const CheckBox = (props)=>{
//   <input type="checkbox" name ={props.object.id} onChange={handlChange}/>
// }