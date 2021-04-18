import React from 'react'
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
    List
} from './aboutElements'

const AboutSection = ({...data}) => {
    console.log(data)
    return (
        <>
            <AboutContainer style={{background: '#191919'}} id={data.id}>
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
                                    <Navitem>Education</Navitem>
                                    <Navitem>Experience</Navitem>
                                    <Navitem>Courses</Navitem>
                                    <Navitem>Hobbies</Navitem>
                                </Navigation>
                                <List></List>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection