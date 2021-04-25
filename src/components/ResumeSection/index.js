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
    Caption
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
                        <Organization>{item.subject}</Organization>
                        <Big>
                            <Detail>{item.org}</Detail>
                            <Detail>{item.year}</Detail>
                        </Big>
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
                </ResumeWrapper>
                <Button href={resume} target="_blank">
                    <FcDownload/>
                </Button>
                <Caption>Download Resume</Caption>
            </ResumeContainer>
        </>
    )
}

export default ResumeSection
