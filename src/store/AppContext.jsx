import { createContext, useEffect, useReducer, useState } from "react"
import { FETCH_PRODUCT , reducer } from "./reducer";


export const AppContext = createContext();

export const intitialState = {
    productList: [],
    error: '',
    isLoading:false,
}

const AppContextProvider = ({children})=>{
    //
    const [state , dispatch] = useReducer(reducer , intitialState);
    const data  = {state , dispatch}
    return (
        <AppContext.Provider value= {data}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;