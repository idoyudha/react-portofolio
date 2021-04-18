import React, {useState} from 'react'
import BodySection from '../components/BodySection'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data'
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
            {/* <BodySection> */}
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
                <HeroSection/>
                <AboutSection {...data}/>
                {/* <InfoSection {...homeObjOne}/> */}
                {/* <InfoSection {...homeObjTwo}/> */}
                <Projects/>
                <InfoSection {...homeObjThree}/>
                <FooterSection/>
            {/* </BodySection> */}
        </>
    )
}

export default Home
