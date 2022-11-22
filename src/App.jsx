// import { Router as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom'

import { React, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"

function App() {
    const [count, setCount] = useState(0)

    return (
        <HashRouter hashType="hashbang">
            <h1>William .K</h1>
            <Header />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default App
