import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Footer from './sections/Footer.jsx'
import Contact from './sections/Contact.jsx'
import Clients from './sections/Clients.jsx'
import Projects from './sections/Projects.jsx'
import WorkExperience from './sections/Experience.jsx'

function App() {

    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Clients />
                <WorkExperience />
                <Contact />
                <Footer />
            </div>

            <p className="read-the-docs">
                All rights reserved to Yvelines Technologies ©.
            </p>
        </>
    )
}

export default App