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
    Detail
} from './ResumeElements'
import { data } from './Data'

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
                </ResumeWrapper>
                <ResumeWrapper>
                    <Heading>Experience</Heading>
                    {printExperience()}
                </ResumeWrapper>
                {/* <ResumeWrapper>
                    <Heading>Courses</Heading>
                    {printCourses()}
                </ResumeWrapper> */}
            </ResumeContainer>
        </>
    )
}

export default ResumeSection
