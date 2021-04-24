import React from 'react'
import FooterSection from '../components/Footer';
import LoaderComponent from '../components/Loader';
import NavReturn from '../components/NavbarReturn';
import ResumeSection from '../components/ResumeSection';

const ResumePage = () => {
    return (
        <>  
            {/* <LoaderComponent/> */}
            <NavReturn/>
            <ResumeSection/>
            <FooterSection/>
        </>
    )
}

export default ResumePage
