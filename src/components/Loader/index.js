import React, { useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoaderContainer } from './LoadersElements';

const LoaderComponent = () => {

    return (
        <>  
            <LoaderContainer>
                <Loader
                    type="Puff"
                    color="#6C63FF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </LoaderContainer>
        </>
    )
}

export default LoaderComponent
