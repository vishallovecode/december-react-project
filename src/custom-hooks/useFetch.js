// now this function useFethc will behave like ha hook because the suffix of the function is use if we will remove this suffux or changed something than
// this will be not a hooks

import { useEffect, useRef, useState } from "react";

// here Fetch is functional component react will consider it as a functional component because if it start with the upper case
export const Fetch = () => {
  const [state, setState] = useState("");
  console.log("Hey I am custom  hooks");
  return undefined;
};



// this is hook
export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(false);
  const [message, setMessage] = useState({
    error: "",
    success: "",
  });

  const getData = async () => {
    isLoading(true);
    try {
      const res = await fetch(url);
      const resJson = await res.json();
      setData(resJson);
      isLoading(false);
    } catch (error) {
      setMessage({ ...message, error: error });
      isLoading(false);
      setData({});
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, loading, message];
};

// React Hook "useState" is called in function "usFetch" that is neither a React function component
// nor a custom React Hook function. React component
// names must start with an uppercase letter. React Hook names must start with the word "use"



// this is hook
export const usePrevious= (value)=> {
    const ref = useRef();
    useEffect(()=>{
        ref.current = value;
    })
    return ref.current
};