import React from 'react';
import "../assets/Navigation.css"

export default function Navigation(props) {
    const loc = window.location.pathname

    const about = `header-item ${loc === "/about" ? "struck" : ""}`
    const work = `header-item ${loc === "/work" ? "struck" : ""}`
    const contact = `header-item ${loc === "/contact" ? "struck" : ""}`

    return (
        <header>
            <nav style={{display : "flex"}} >
                <a className={about} href="/about" >About</a>
                <a className={work} href="/work" >Work</a>
                <a className={contact} href="/contact" >Contact</a>
            </nav>
        </header>
    )
}