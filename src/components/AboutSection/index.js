import React, { useState } from 'react'
import img from '../../images/about.svg'
import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1, 
    Column2, 
    ImgWrap, 
    Img,
    TextWrapper,
    Heading,
    Description, 
    Navigation,
    Navitem,
    List,
    Me,
    MeHead,
    MeOrg,
    ResumePage
} from './aboutElements'
import { Link } from "react-router-dom";
import { FcDocument, FcNext } from 'react-icons/fc';

const AboutSection = ({...data}) => {
    // Multi state
    const [values, setValues] = useState({
        about: data.education,
        nav1: null,
        nav2: null,
        nav3: null
    })

    const printData = () => {
        // console.log("values", values.about)
        if (values.about.length > 1) {
            return values.about.map((item, index) => {
                return  <List>
                            <MeHead>{item.subject}</MeHead>
                            <MeOrg>{item.org}</MeOrg>
                            <Me>{item.year}</Me>
                        </List>
            })
        }
        else {
            return  <List>
                        <MeHead>{values.about[0].subject}</MeHead>
                        <MeOrg>{values.about[0].org}</MeOrg>
                        <Me>{values.about[0].year}</Me>
                    </List>
        }
    }

    const replaceData = (param) => {
        if (param === 'edu') {
            setValues({...values, about: data.education, nav1: "active", nav2: null, nav3: null})
        }
        else if (param === 'ex') {
            setValues({...values, about: data.experience, nav1: null, nav2: "active", nav3: null})
        }
        else {
            setValues({...values, about: data.courses, nav1: null, nav2: null, nav3: "active"})
        }
    }

    return (
        <>
            <AboutContainer id={data.id}>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <ImgWrap>
                                <Img src={img} alt={'...'}/>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading>{data.heading}</Heading>
                                <Description>{data.description}</Description>
                                <Navigation>
                                    <Navitem className={values.nav1}   
                                        onClick={() => replaceData('edu')}>
                                        Education
                                    </Navitem>
                                    <Navitem className={values.nav2}
                                        onClick={() => replaceData('ex')}>
                                        Experience
                                    </Navitem>
                                    <Navitem className={values.nav3}
                                        onClick={() => replaceData('courses')}>
                                        Courses
                                    </Navitem>
                                    <Link to="/resume">
                                        <ResumePage>
                                            <FcDocument />
                                            <FcNext />
                                        </ResumePage>
                                    </Link>
                                </Navigation>
                                {printData()}
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection