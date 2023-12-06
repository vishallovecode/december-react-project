import { createContext, useEffect, useReducer, useState } from "react"
import { FETCH_PRODUCT , reducer } from "./reducer";


export const AppContext = createContext();

export const intitialState = {
    productList: [],
    error: '',
    isLoading:false,
}

const AppContextProvider = (props)=>{
    //
    const [state , dispatch] = useReducer(reducer , intitialState);
    const data  = {state , dispatch}
    return (
        <AppContext.Provider value= {data}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;