import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import "../assets/Navigation.css"

export default function Navigation(props) {
    const [loc, setLoc] = useState("")

    const about = `header-item ${loc === "about" ? "struck" : ""}`
    const work = `header-item ${loc === "work" ? "struck" : ""}`
    const contact = `header-item ${loc === "contact" ? "struck" : ""}`
    const resume = `header-item ${loc === "resume" ? "struck" : ""}`

    return (
        <header>
            <nav style={{display : "flex"}} >
                <Link className={about} to="/about" onClick={ () => setLoc("about") }>About</Link>
                <Link className={work} to="/work" onClick={() => setLoc("work")}>Work</Link>
                <Link className={contact} to="/contact" onClick={() => setLoc("contact")}>Contact</Link>
                <Link className={resume} to="/resume" onClick={() => setLoc("resume")}>Resume</Link>
            </nav>
        </header>
    )
}