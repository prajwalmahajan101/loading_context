import {useContext, useState} from "react";
import {LoadingContext} from "../Providers/LoadingProvider";

export const useLoading = () =>{
    return useContext(LoadingContext)
}
export const useProvideLoading = () =>{
    const [isLoading,setLoading] = useState(false);
    return {
        isLoading,
        setLoading
    }
}