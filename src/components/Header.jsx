import React from 'react';
import Navigation from "./Navigation"


export default function Header() {

    // box-shadow: 0 8px 6px -6px black;
    // linear-gradient(-45deg, #e73c7e, #ee7752, #e73c7e)

    // -webkit-backdrop-filter: blur(10px);
    // backdrop-filter: blur(10px);

    const styles = {
        padding : "1.3%",
        background : "black",
        boxShadow : "0 8px 6px -6px black",
    }

    return (
        <>
            <div id='my-nav'>
                <h1 style={{textAlign : "center", color : "whitesmoke"}}>William K.</h1>
                <Navigation />
            </div>
        </>
    )
}