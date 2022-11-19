import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Header />
            <Routes >
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </Router>
    )
}

export default App
