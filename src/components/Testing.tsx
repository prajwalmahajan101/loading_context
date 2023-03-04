import React from "react";
import {useLoading} from "../Hooks/loading";
import Loader from "./Loader";

const Testing = (props:{children:React.ReactNode}) =>{
    const {isLoading} = useLoading();
    if(isLoading){
        return <Loader text={"Loading"}></Loader>
    }
    else {
        return <>{props.children}</>
    }

}

export default Testing;