import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import { data } from '../components/AboutSection/Data'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
                <HeroSection/>
                <AboutSection {...data}/>
                <Projects/>
                <FooterSection/>
        </>
    )
}

export default Home
