import React, {useState, useEffect} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import { data } from '../components/AboutSection/Data'
import AboutSection from '../components/AboutSection'
import CodeSection from '../components/CodeSection'
import LoaderComponent from '../components/Loader'
import FooterSection from '../components/Footer'
import ClipLoader from "react-spinners/ClipLoader";
import '../App.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //     setLoading(false)
    //     }, 3000)
    // }, [])

    return (
        <>  
            {/* <LoaderComponent /> */}
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <AboutSection {...data}/>
            <Projects/>
            <CodeSection/>
            <FooterSection/>
        </>
    )
}

export default Home
