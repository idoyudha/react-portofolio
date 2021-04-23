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
    MeOrg
} from './aboutElements'
const AboutSection = ({...data}) => {
    // Multi state
    const [about, setData] = useState(data.education)
    const [nav1, setNav1] = useState("active")
    const [nav2, setNav2] = useState("")
    const [nav3, setNav3] = useState("")

    const printData = () => {
        if (about.length > 1) {
            return about.map((item, index) => {
                console.log(item, index)
                return  <List>
                            <MeHead>{item.subject}</MeHead>
                            <MeOrg>{item.org}</MeOrg>
                            <Me>{item.year}</Me>
                        </List>
            })
        }
        else {
            return  <List>
                        <MeHead>{about[0].subject}</MeHead>
                        <MeOrg>{about[0].org}</MeOrg>
                        <Me>{about[0].year}</Me>
                    </List>
        }
    }
    const replaceData = (param) => {
        if (param === 'edu') {
            setData(data.education)
            setNav1("active")
            setNav2("")
            setNav3("")
        }
        else if (param === 'ex') {
            setData(data.experience)
            setNav1("")
            setNav2("active")
            setNav3("")
        }
        else {
            setData(data.courses)
            setNav1("")
            setNav2("")
            setNav3("active")
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
                                    <Navitem className={nav1}   
                                        onClick={() => replaceData('edu')}>
                                        Education
                                    </Navitem>
                                    <Navitem className={nav2}
                                        onClick={() => replaceData('ex')}>
                                        Experience
                                    </Navitem>
                                    <Navitem className={nav3}
                                        onClick={() => replaceData('courses')}>
                                        Courses
                                    </Navitem>
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