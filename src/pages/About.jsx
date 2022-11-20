import React from 'react';

import hiking1 from "../assets/imgs/hiking-1.jpg"
import hiking2 from "../assets/imgs/hiking-2.jpg"

export default function About() {
    const centerStuff = {
        display: "flex", alignItems: "center", justifyContent: 'center', flexDirection : "column"
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <div className='island' style={{ marginTop: "2%", ...centerStuff }} >

                <p style={{ color: "whitesmoke", margin: "auto" }}>
                    My name is William (I go by Will), I'm an avid hiker.
                    I like games, computers, and other tech related things.
                    I also enjoy the occasional bike ride.
                </p>

                <img style={{ margin: ".5%", maxWidth: "45%", maxHeight: "45%" }} src={hiking1} alt="A picture of me sitting on an outcropping the in the Arizona Desert, with mountains in the distance." />
                <img style={{ margin: ".5%", maxWidth: "45%", maxHeight: "45%" }} src={hiking2} alt="A picture of me posing with a goat on top of a mountain in Norway." />

            </div>
        </div>
    )
}