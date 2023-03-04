import React, {createContext} from "react";
import {useProvideLoading} from "../Hooks/loading";

interface Loading {
    isLoading :boolean
    setLoading: null | React.Dispatch<React.SetStateAction<boolean>>
}


const initialState: Loading= {
    isLoading:false,
    setLoading:null
}

export const LoadingContext = createContext(initialState);
export const LoadingProvider = ({children}:{children:React.ReactNode})=>{
    const loadingData = useProvideLoading();
    return <LoadingContext.Provider value={loadingData}>{children}</LoadingContext.Provider>
}