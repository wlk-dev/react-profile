import React, { useEffect, useRef } from 'react'

export default function Work() {
    const works = useRef(null)

    useEffect(() => {
        scrollToBottom()
    }, []);


    const scrollToBottom = () => {
        works.current?.scrollIntoView({ behavior: "smooth" })
    }


    const createTiles = total => {
        return Array.from(Array(total)).map((_, index) => {
            return (<div key={index + 1} className="tile" idx={index}></div>)
        })
    }

    const tiles = createTiles(3 * 3)

    return (
        <div id='tile-container'>
            <div id="tiles" ref={works}>
                {tiles}
            </div>
        </div>
    )
}