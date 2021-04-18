import React, {useState} from 'react'
import BodySection from '../components/BodySection'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'

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
                <InfoSection {...homeObjOne}/>
                {/* <InfoSection {...homeObjTwo}/> */}
                <Projects/>
                <InfoSection {...homeObjThree}/>
            {/* </BodySection> */}
        </>
    )
}

export default Home