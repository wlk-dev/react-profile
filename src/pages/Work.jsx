import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';


export default function Work() {
    const works = useRef(null)

    useEffect(() => {
        scrollToBottom()
    }, []);


    const scrollToBottom = () => {
        works.current?.scrollIntoView({ behavior: "smooth" })
    }

    const projs = [
        {
            name : "Flareon Flip",
            href : "https://github.com/wlk-dev/flareon-flip"
        },
        {
            name : "Tech Blog",
            href : "https://github.com/wlk-dev/tech-blog-site"
        },
        {
            name : "Work Day Scheduler",
            href : "https://github.com/wlk-dev/work-day-scheduler"
        },
        {
            name : "Social Network API",
            href : "https://github.com/wlk-dev/social-network-api"
        },
        {
            name : "PWA Text Editor",
            href : "https://github.com/wlk-dev/pwa-jate"
        },
        {
            name : "Note Taker",
            href : "https://github.com/wlk-dev/note-taker"
        },
        {
            name : "Team Card Generator",
            href : "https://github.com/wlk-dev/team-card-gen"
        },
        {
            name : "Readme Generator (CLI)",
            href : "https://github.com/wlk-dev/cli-readme-gen"
        },
        {
            name : "Catify",
            href : "https://github.com/wlk-dev/catify"
        },
    ]

    const createTiles = total => {
        return Array.from(projs).map((proj, index) => {
            return (<Link to={proj.href} target="_blank" key={index + 1} className="tile" idx={index}>{proj.name}</Link>)
        })
    }

    const tiles = createTiles(6)

    return (
        <div id='tile-container'>
            <div id="tiles" ref={works}>
                {tiles}
            </div>
        </div>
    )
}