// import { Router as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom'

import { React, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

function App() {
    return (
        <HashRouter hashType="hashbang">
            <Header />
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}

export default App
