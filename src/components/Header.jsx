import React from 'react';
import Navigation from "./Navigation"


export default function Header() {

    // box-shadow: 0 8px 6px -6px black;
    // linear-gradient(-45deg, #e73c7e, #ee7752, #e73c7e)

    return (
        <div style={{padding : "1.3%", background: "linear-gradient(-45deg, black, #333, black)", boxShadow : "0 8px 6px -6px black"}}>
            <Navigation />
        </div>
    )
}