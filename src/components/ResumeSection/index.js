import React from 'react'
import {
    ResumeContainer,
    CaptionHeading,
    ResumeWrapper,
    Heading,
    Big,
    Organization,
    ContentWrapper,
    Content,
    Detail,
    Button,
    Caption,
    Column,
    Credential,
    Univ
} from './ResumeElements'
import { data } from './Data'
import { FcDownload } from 'react-icons/fc'
import resume from "../../doc/Resume-Ido.pdf"

const ResumeSection = () => {

    const printEducation = () => {
        // console.log('education', data.education)
        return data.education.map((item) => {
            return  <>
                        <Big>
                            <Detail>{item.org}</Detail>
                            <Detail>{item.year}</Detail>
                        </Big>
                        <Organization>{item.subject}</Organization>
                        <ContentWrapper>
                            {item.achievements.map((item => {
                                return <Content>{item.title}</Content>
                            }))}
                        </ContentWrapper>
                    </>
        })
    }

    const printExperience = () => {
        return data.experience.map((item) => {
            return  <>
                        <Big>
                            <Detail>{item.org}</Detail>
                            <Detail>{item.year}</Detail>
                        </Big>
                        <Organization>{item.subject}</Organization>
                        <ContentWrapper>
                            {item.achievements.map((item => {
                                return <Content>{item.title}</Content>
                            }))}
                        </ContentWrapper>
                    </>
        })
    }

    const printCourses = () => {
        return data.courses.map((item) => {
            return  <>  
                        <Content>
                            <Credential href={item.credential} target="_blank">{item.subject} - <Univ>{item.org}</Univ></Credential>
                        </Content>
                    </>
        })
    }

    return (
        <>
            <ResumeContainer>
                <CaptionHeading>Resume</CaptionHeading>
                <ResumeWrapper>
                    <Heading>Education</Heading>
                    {printEducation()}
                    <Heading>Experience</Heading>
                    {printExperience()}
                    <Heading>Courses and Certifications</Heading>
                    <Column>
                    {printCourses()}
                    </Column>
                </ResumeWrapper>
                <Button href={resume} target="_blank">
                    <FcDownload/>
                    <Caption>Download Resume</Caption>
                </Button>
            </ResumeContainer>
        </>
    )
}

export default ResumeSection
